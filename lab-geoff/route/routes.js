'use strict';

let Movie = require('../model/movie.js');
let storage = require('../lib/storage.js');

module.exports = (router) => {
  router.get('/movies', (req, res) => {
    console.log('get request');
    storage.getItem('movies', req.url.query.id)
    .then(movie => {
      res.json(movie);
      res.end();
    });
  });
  router.post('/movies', (req, res) => {
    if(!req.body) return res.sendStatus(400); //double check message
    let movie = new Movie(req.body.title, req.body.dir, req.body.rating);
    storage.createItem('movies', movie);
  });
  router.delete('/movies', (req, res) => {
    storage.deleteItem('movies', req.url.query.id);
    res.end();
  });
  // router.put('/movies', (req, res) => {
  //   //update item
  // });
};
