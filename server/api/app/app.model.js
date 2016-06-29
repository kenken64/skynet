'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AppSchema = new Schema({
    name: String,
    url: String,
    redirectUrl: String,
    createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    dateCreated: {type: Number, default: Date.now},
    lastUpdated: {type: Number, default: Date.now},
    active: Boolean
});

module.exports = mongoose.model('App', AppSchema);