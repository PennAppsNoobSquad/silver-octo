'use strict';

describe('Controller: AddMedicationCtrl', function () {

  // load the controller's module
  beforeEach(module('silverOctoTestApp'));

  var AddMedicationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddMedicationCtrl = $controller('AddMedicationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
