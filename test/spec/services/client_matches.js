'use strict';

describe('Service: clientMatches', function () {

  // load the service's module
  beforeEach(module('silverOctoTestApp'));

  // instantiate service
  var clientMatches;
  beforeEach(inject(function (_clientMatches_) {
    clientMatches = _clientMatches_;
  }));

  it('should do something', function () {
    expect(!!clientMatches).toBe(true);
  });

});
