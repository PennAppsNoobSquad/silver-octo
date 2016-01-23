'use strict';

/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the silverOctoTestApp
 */
angular.module('silverOctoTestApp')
  .controller('MainCtrl', function ($scope) {

    $scope.prescriptions = [{
      name: "Heart medicine",
      frequency: "Twice a day"
    }, {
      name: "Advil",
      frequency: "After dinner"
    }, {
      name: "High cholesterol pills",
      frequency: "As needed"
    }, {
      name: "Levothyroxine",
      frequency: "Every morning"
    }];

  });
