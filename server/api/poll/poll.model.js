'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ResponseSchema = new Schema({text: String, votes: Number});
var PollSchema = new Schema({
  question: String,
  createdAt: Date,
  responses: [ResponseSchema],
  _creator: { type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Poll', PollSchema);
