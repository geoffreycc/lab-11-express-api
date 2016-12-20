'use strict';

let Movie = require('../model/movie.js');
let storage = require('../lib/storage.js');

module.exports = (router) => {
  router.get('/movies', (req, res) => {
    console.log('get request');
    // schemaName, id
    //stuff
  });
  router.put('/movies', (req, res) => {
    let movie = new Movie(req.body.title, req.body.dir, req.body.rating);
    storage.createItem('movies', movie);
  });
  router.delete('/movies', (req, res) => {
    // schemaName, id
    //stuff
  });};

