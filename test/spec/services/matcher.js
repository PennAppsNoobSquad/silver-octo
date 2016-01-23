'use strict';

describe('Service: matcher', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var matcher;
  beforeEach(inject(function (_matcher_) {
    matcher = _matcher_;
  }));

  it('should do something', function () {
    expect(!!matcher).toBe(true);
  });

});
