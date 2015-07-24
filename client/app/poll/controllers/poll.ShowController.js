'use strict';

angular.module('votingAppApp')
  .controller('PollShowCtrl', function (Poll, $scope, $resource, $routeParams, $location) {
    $scope.poll = Poll.get({id: $routeParams.id});

    $scope.selection;

    $scope.submitResponse = function() {
      var poll = $scope.poll;
      poll.responses[$scope.selection].votes++;
      poll.$update().then(function(){
        $location.path('/');
      });
    };
  });
