'use strict';

angular.module('votingAppApp')
  .controller('PollShowCtrl', function (Poll, $scope, $resource, $routeParams, $location, Auth) {
    $scope.poll = Poll.get({id: $routeParams.id});
    var poll = $scope.poll;

    $scope.selection;

    $scope.isOwner = function () {
     return Auth.getCurrentUser()._id === poll._creator;
    };

    $scope.deletePoll = function (poll) {
      poll.$delete().then(function(){
        $location.path('/');
      });
    };

    $scope.submitResponse = function() {
      poll.responses[$scope.selection].votes++;
      poll.$update().then(function(){
        $location.path('/');
      });
    };
  });
