angular.module('votingAppApp')
  .directive('pollChart', function() {
    return {
      scope: true,
      restrict: 'AE',
      replace: true,
      template: '<canvas height="400" width="400"></canvas>',
      link : function(scope, elem, attrs) {
        var data = {
          labels: scope.poll.responses.map(function(response){return response.text}),
          datasets: [
            {
              label: "Votes",
              fillColor: "rgba(220,220,220,0.5)",
              strokeColor: "rgba(220,220,220,0.8)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: scope.poll.responses.map(function(response){return response.votes})
            }
          ]
        };

        var ctx = elem.get(0).getContext("2d");
        var pollChart = new Chart(ctx).Bar(data);
      }
    };
  });
