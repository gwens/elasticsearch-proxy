const fetch = require('node-fetch');

module.exports = function(app, db) {
  app.post('/emails/search', (req, res) => {
    console.log(req.body);
    const elasticUrl = "https://search-search-archive-sxxeh2lvo7lacugez36nv2f4bq.us-east-2.es.amazonaws.com/emails/_search";
    fetch(elasticUrl, {
      method: 'POST',
      body: JSON.stringify(req.body),
      headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {console.log(response)});
    res.send('received a POST request to /emails/search');
  });
};