'use strict';

let request = require('superagent');
let expect = require('chai').expect;
require('../server.js');

describe('testing the routes for movies api', function() {
  let movie = null;
  describe('testing POST request', function() {
    it('should add a movie to storage', function(done) {
      request.post('http://localhost:3000/api/movies')
      .send({title: 'testTitle', dir: 'testDirector', rating: 'testRating'})
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.title).to.equal('testTitle');
        expect(res.status).to.equal(200);
        movie = res.body;
        done();
      });
    });
  });
  describe('testing GET request', function() {
    it('should get a movie from storage', function(done) {
      console.log('movie id ' + movie.id);
      request.get(`http://localhost:3000/api/movies/${movie.id}`)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.id).to.equal(movie.id);
        expect(res.status).to.equal(200);
        done();
      });
    });
    // it('should return 400 for no id', function(done) {
    //   request.get('http://localhost:3000/movies?id=')
    //   .end((err, res) => {
    //     expect(res.status).to.equal(400);
    //     done();
    //   });
    // });
    // it('should return 404 for not found id', function(done) {
    //   request.get('http://localhost:3000/movies?id=10')
    //   .end((err, res) => {
    //     expect(res.status).to.equal(404);
    //     done();
    //   });
    // });
    // it('should return 404 for unregister routes', function(done) {
    //   request.get('http://localhost:3000/test')
    //   .end((err, res) => {
    //     expect(res.status).to.equal(404);
    //     done();
    //   });
    // });
  });
});