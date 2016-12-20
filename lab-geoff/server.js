'use strict';

let express = require('express');
let jsonParser = require('body-parser').json();

let PORT = process.env.port || 3000;

let app = express();
let router = express.Router();

require('./route/routes.js')(router);
app.use(jsonParser);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});