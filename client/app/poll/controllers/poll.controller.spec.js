'use strict';

describe('Controller: PollCtrl', function () {

  // load the controller's module
  beforeEach(module('votingAppApp'));

  var PollCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/polls/:id')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    PollCtrl = $controller('PollCtrl', {
      $scope: scope
    });
  }));

  it('should attach a poll to the scope', function () {
    $httpBackend.flush();
    expect(scope.poll.length).toBe(1);
  });
});
