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
    .then(response => {
      let emails = {};
      response.hits.hits.map(hit => {
        let email = hit._source;
        email.score = hit._score;
        let id = hit._source.id;
        emails[`${id}`] = email;
      });
      const hits = response.hits.total;
      // Return the emails and total hits
      res.send( { emails, hits } );
    });
  });
};