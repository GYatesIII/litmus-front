'use strict';

describe('Controller: ExpertiseCtrl', function () {

  // load the controller's module
  beforeEach(module('litmusApp'));

  var ExpertiseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExpertiseCtrl = $controller('ExpertiseCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
