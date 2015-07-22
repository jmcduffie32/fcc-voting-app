'use strict';

angular.module('votingAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.polls = [];

    $http.get('/api/polls').success(function(polls) {
      $scope.polls = polls;
    });

    $scope.addPoll = function() {
      if($scope.newPoll === '') {
        return;
      }
      $http.post('/api/polls', { name: $scope.newPoll });
      $scope.newPoll = '';
    };

    $scope.deletePoll = function(poll) {
      $http.delete('/api/polls/' + poll._id);
    };
  });
