'use strict';

let Movie = require('../model/movie.js');
let storage = require('../lib/storage.js');

module.exports = (router) => {
  router.get('/api/movies/:id', (req, res) => {
    if(req.params.id) {
      storage.fetchItem('movies', req.params.id)
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(404);
      });
      return;
    }
    res.sendStatus(400);
  });
  router.post('/api/movies', (req, res) => {
    if(!req.body) return res.sendStatus(400);
    let movie = new Movie(req.body.title, req.body.dir, req.body.rating);
    storage.createItem('movies', movie);
    res.json(movie);
  });
  router.delete('/movies', (req, res) => {
    storage.deleteItem('movies', req.query.id)
    .then(() => {
      res.sendStatus(204);
    });
  });
  // router.put('/movies', (req, res) => {
  //   //update item
  // });
};