'use strict';

let express = require('express');
let jsonParser = require('body-parser').json();
let createError = require('http-errors');

let PORT = process.env.port || 3000;

let app = express();
let router = express.Router();

app.use(jsonParser);
require('./route/routes.js')(router);
app.use(router);
app.use((err, req, res, next) => {
  if(!req.body) {
    return next(createError(400, 'bad request'));
  }
  if(!req.body.title) {
    return next(createError(400, 'bad request'));
  }
  next();
});
//erorr handling

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});