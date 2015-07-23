'use strict';

angular.module('votingAppApp')
  .controller('PollCtrl', function ($scope, $http, $routeParams, $location) {
    $scope.poll = [];
    $scope.selection;

    $http.get('/api/polls/'+$routeParams.id).success(function(poll) {
      $scope.poll = poll;
    });

    $scope.submitResponse = function() {
      var poll = $scope.poll;
      poll.responses[$scope.selection].votes++;
      console.log(poll.responses);
      $http.put('/api/polls/'+poll._id, poll).success(function(){
        $location.path('/');
      });
    };


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
