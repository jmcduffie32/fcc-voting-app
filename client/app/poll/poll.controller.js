'use strict';

angular.module('votingAppApp')
  .controller('PollCtrl', function ($scope, $http, $routeParams) {
    $scope.poll = [];

    $http.get('/api/polls/'+$routeParams.id).success(function(poll) {
      $scope.poll = poll;
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
