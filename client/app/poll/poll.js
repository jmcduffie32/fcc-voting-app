'use strict';

angular.module('votingAppApp')
  .config(function ($routeProvider) {
    $routeProvider

    //make sure routes are in the correct order
    .when('/polls/:userId/myPolls', {
      templateUrl: 'app/main/main.html',
      controller: 'PollIndexCtrl'
    })
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
  .factory('Poll', function($resource, Auth){
    return $resource('/api/polls/:id', {id: "@_id"}, {
      update: {
        method: "PUT"
      }
    });
  });
