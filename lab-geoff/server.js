'use strict';

let express = require('express');
let jsonParser = require('body-parser').json();
// let createError = require('http-errors');

let PORT = process.env.port || 3000;

let app = express();
let router = express.Router();

app.use(jsonParser);
require('./route/routes.js')(router);
app.use(router);

// app.use((err, req, res) => { //next
//   console.err(err.message);
//   err = createError(500, err.message);
//   res.status(err.status).send(err.name);
// });

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});