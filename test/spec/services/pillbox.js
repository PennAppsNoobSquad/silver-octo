'use strict';

describe('Service: pillbox', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var pillbox;
  beforeEach(inject(function (_pillbox_) {
    pillbox = _pillbox_;
  }));

  it('should do something', function () {
    expect(!!pillbox).toBe(true);
  });

});
