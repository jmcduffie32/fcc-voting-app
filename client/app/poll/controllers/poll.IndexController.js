'use strict';

angular.module('votingAppApp')
  .controller('PollIndexCtrl', function (Poll, $scope, $routeParams, $location) {
    if ($routeParams.userId) {
      $scope.polls = Poll.query({_creator: $routeParams.userId});
    }else {
      $scope.polls = Poll.query();
    }


    $scope.deletePoll = function(pollId) {
      $http.delete('/api/polls/' + pollId);
    };
  });
