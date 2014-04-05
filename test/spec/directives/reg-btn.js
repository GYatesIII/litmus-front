'use strict';

describe('Directive: regBtn', function () {

  // load the directive's module
  beforeEach(module('litmusApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<reg-btn></reg-btn>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the regBtn directive');
  }));
});
