'use strict';

angular.module('votingAppApp')
  .controller('PollIndexCtrl', function (Poll, $scope, $routeParams, $location) {
    $scope.polls = Poll.query();

    $scope.deletePoll = function(pollId) {
      $http.delete('/api/polls/' + pollId);
    };
  });
