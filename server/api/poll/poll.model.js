'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var responseSchema = new Schema({response: String, votes: Number});
var pollSchema = new Schema({
  question: String,
  createdAt: Date,
  responses: [responseSchema],
  _creator: [{ type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Poll', pollSchema);
