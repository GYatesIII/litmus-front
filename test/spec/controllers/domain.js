'use strict';

describe('Controller: DomainCtrl', function () {

  // load the controller's module
  beforeEach(module('litmusApp'));

  var DomainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DomainCtrl = $controller('DomainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
