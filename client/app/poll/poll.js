'use strict';

angular.module('votingAppApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/polls/:id', {
        templateUrl: 'app/poll/poll.html',
        controller: 'PollCtrl'
      });
  });
