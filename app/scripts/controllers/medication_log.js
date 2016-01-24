'use strict';
/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:MedicationLogCtrl
 * @description
 * # MedicationLogCtrl
 * Displays the medication log
 */
angular.module('silverOctoTestApp')
  .controller('MedicationLogCtrl', function ($scope, $log, pillbox) {
    $scope.activityLog = [{
      name: "Took advil",
      action: "completed",
      time: "2 minutes ago"
    }, {
      name: "Took aspirin",
      action: "missed",
      time: "1 day ago"
    }];
  });
