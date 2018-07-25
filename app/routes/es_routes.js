const fetch = require('node-fetch');
const elasticUrl = "https://search-search-archive-sxxeh2lvo7lacugez36nv2f4bq.us-east-2.es.amazonaws.com/";

module.exports = function(app, db) {
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