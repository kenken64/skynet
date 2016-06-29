'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('App', AppSchema);