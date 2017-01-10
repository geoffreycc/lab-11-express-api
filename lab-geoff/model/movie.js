'use strict';

let uuid = require('node-uuid');

module.exports = function(title, dir, rating, id) {
  if(!title) throw new Error('title needed');
  if(!dir) throw new Error('director needed');
  if(!rating) throw new Error('rating needed');
  this.id = id || uuid.v1();
  this.title = title;
  this.dir = dir;
  this.rating = rating;
};