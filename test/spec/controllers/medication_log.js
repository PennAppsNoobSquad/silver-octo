'use strict';

describe('Controller: MedicationLogCtrl', function () {

  // load the controller's module
  beforeEach(module('silverOctoTestApp'));

  var MedicationLogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicationLogCtrl = $controller('MedicationLogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
