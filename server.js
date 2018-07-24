const express = require('express');
const bodyparser = require('body-parser');

const app = express();

const port = 8000;

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('we are live on port ' + port);
});
