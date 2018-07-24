module.exports = function(app, db) {
  app.get('/emails/search', (req, res) => {
    res.send('received a get request to /emails/search');
  });
};