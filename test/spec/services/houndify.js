'use strict';

describe('Service: houndify', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var houndify;
  beforeEach(inject(function (_houndify_) {
    houndify = _houndify_;
  }));

  it('should do something', function () {
    expect(!!houndify).toBe(true);
  });

});
