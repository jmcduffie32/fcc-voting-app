'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var questionSchema = new Schema({question: String, votes: Number});
var pollSchema = new Schema({
  name: String,
  description: String,
  createdAt: Boolean,
  questions: [questionSchema],
  creator: [{ type: ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Poll', ThingSchema);
