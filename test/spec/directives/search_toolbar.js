'use strict';

describe('Directive: searchToolbar', function () {

  // load the directive's module
  beforeEach(module('silverOctoTestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-toolbar></search-toolbar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchToolbar directive');
  }));
});
