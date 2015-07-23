'use strict';

angular.module('votingAppApp')
  .controller('PollCreateCtrl', function (Poll, $scope, $location) {
    $scope.poll = new Poll();
    console.log('made it here');
    $scope.createPoll = function() {
      if($scope.poll === {}) {
        return;
      }
      $http.post('/api/polls', $scope.poll);
      $scope.poll = {};
    };
  });
