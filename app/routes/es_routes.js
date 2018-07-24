const fetch = require('node-fetch');

module.exports = function(app, db) {
  app.post('/emails/search', (req, res) => {
    console.log(req.body);
    fetch("http://ambient-explorer.ml:9200/_cat/indices?v", {
      method: 'GET'
    }).then(res => console.log("status " + res.statusText))
    res.send('received a POST request to /emails/search');
  });
};