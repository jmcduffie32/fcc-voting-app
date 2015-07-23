'use strict';

angular.module('votingAppApp')
  .controller('MainCtrl', function (Poll, $scope, Auth) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.polls = Poll.query();
  });
