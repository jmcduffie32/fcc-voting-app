/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Poll = require('../api/poll/poll.model');
var User = require('../api/user/user.model');

User.find({}).remove()
  .then(function(){
    Poll.find({}).remove(function() {
      User.create({
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin'
      }, function() {
          console.log('finished populating users');
        }
      );
      var user = new User({
        name: 'Test User',
        provider: 'local',
        email: 'bobber321988@gmail.com',
        password: 'breads'
      });
      user.save();
      Poll.create({
        question : "why",
        responses : [{ text: "Because", votes: 2},{text: "This is the best", votes: 3}],
        _creator : user._id,
        createdAt : Date.now()
      }, {
        question : 'Thing 2',
        responses : [{ text: "Why", votes: 2}],
        _creator : user._id,
        createdAt : Date.now()
      }, {
        question : 'Thing 3',
        responses : [{ text: "Why", votes: 2}],
        _creator : user._id,
        createdAt : Date.now()
      },  {
        question : 'Thing 4',
        responses : [{ text: "Why", votes: 2}],
        _creator : user._id,
        createdAt : Date.now()
      },  {
        question : 'Thing 5',
        responses : [{ text: "Why", votes: 2}],
        _creator : user._id,
        createdAt : Date.now()
      },{
        question : 'Thing 6',
        responses : [{ text: "Why", votes: 2}],
        _creator : user._id,
        createdAt : Date.now()
    });
  })
});
