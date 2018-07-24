const esRoutes = require('./es_routes');

module.exports = function(app, db) {
  esRoutes(app, db);
}