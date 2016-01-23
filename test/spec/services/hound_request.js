'use strict';

describe('Service: houndRequest', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var houndRequest;
  beforeEach(inject(function (_houndRequest_) {
    houndRequest = _houndRequest_;
  }));

  it('should do something', function () {
    expect(!!houndRequest).toBe(true);
  });

});
