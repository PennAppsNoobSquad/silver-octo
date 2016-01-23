'use strict';

describe('Service: pillDescription', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var pillDescription;
  beforeEach(inject(function (_pillDescription_) {
    pillDescription = _pillDescription_;
  }));

  it('should do something', function () {
    expect(!!pillDescription).toBe(true);
  });

});
