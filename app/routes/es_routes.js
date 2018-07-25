const fetch = require('node-fetch');
const elasticUrl = "https://search-search-archive-sxxeh2lvo7lacugez36nv2f4bq.us-east-2.es.amazonaws.com/";
const allowedOrigin = "https://ambient-explorer.ml";

module.exports = function(app, db) {
  // Enable access to the API from a specific origin
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", allowedOrigin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Debug
  app.get('/', (req, res) => {
    res.send('getting');
  });

  app.post('/:index/_search', (req, res) => {
    console.log(req.headers.host);
    // URL to search the specific Elasticsearch index requested
    const fullUrl = elasticUrl + req.params.index + "/_search";
    
    fetch(fullUrl, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => res.send('Error:', error))
    .then(response => {
      res.send(response);
    });
  });
};