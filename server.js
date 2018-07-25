const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3201;

app.use(bodyParser.json());

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('we are live on port ' + port);
});
