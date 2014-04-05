'use strict';

describe('Service: Expertise', function () {

  // load the service's module
  beforeEach(module('litmusApp'));

  // instantiate service
  var Expertise;
  beforeEach(inject(function (_Expertise_) {
    Expertise = _Expertise_;
  }));

  it('should do something', function () {
    expect(!!Expertise).toBe(true);
  });

});
