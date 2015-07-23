'use strict';

angular.module('votingAppApp')
  .config(function ($routeProvider) {
    $routeProvider

    //make sure routes are in the correct order
    .when('/polls/new', {
      templateUrl: 'app/poll/new.html',
      controller: 'PollCreateCtrl'
      })
      .when('/polls/:id', {
        templateUrl: 'app/poll/show.html',
        controller: 'PollShowCtrl'
    })
  });


angular.module('votingAppApp')
  .factory('Poll', function($resource){
    return $resource('/api/polls/:id', {id: "@_id"}, {
      update: {
        method: "PUT"
      }
    });
  });
