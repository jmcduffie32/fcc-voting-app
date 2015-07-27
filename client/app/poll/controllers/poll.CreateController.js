'use strict';

angular.module('votingAppApp')
  .controller('PollCreateCtrl', function (Poll, $scope, $location, Auth) {
    $scope.poll = new Poll();
    var poll = $scope.poll;
    poll.responses = [];
    poll.question = '';
    poll.createdAt = Date.now();
    poll._creator = Auth.getCurrentUser()._id;
    console.log(poll);

    $scope.addResponse = function () {
      poll.responses.push({text:'',votes:0});
      console.log(poll);
    }


    $scope.createPoll = function() {
      if(poll === {}) {
        return;
      }
      poll.$save().then(function(){
        $location.path('/');
      });
      poll = {};
    };
  });
