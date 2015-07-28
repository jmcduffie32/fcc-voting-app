'use strict';

angular.module('votingAppApp')
  .controller('PollShowCtrl', function (Poll, $scope, $resource, $routeParams, $location, Auth) {
    $scope.poll;
    $scope.selection;
    Poll.get({id: $routeParams.id}, function(result) {
      $scope.poll = result;
      $scope.selection;
      $scope.isLoaded = true;

      $scope.isOwner = function () {
        return Auth.getCurrentUser()._id === $scope.poll._creator;
      };
    });

    $scope.submitResponse = function() {
      $scope.poll.responses[$scope.selection].votes++;
      $scope.poll.$update().then(function(){
        $location.path('/');
      });
    };



    $scope.deletePoll = function (poll) {
      poll.$delete().then(function(){
        $location.path('/');
      });
    };
  });
