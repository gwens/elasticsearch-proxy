module.exports = function(app, db) {
  app.post('/emails/search', (req, res) => {
    console.log(req.body);
    res.send('received a POST request to /emails/search');
  });
};