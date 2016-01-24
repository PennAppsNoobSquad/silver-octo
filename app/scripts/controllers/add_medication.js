'use strict';

/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:AddMedicationCtrl
 * @description
 * # AddMedicationCtrl
 * Controller of the silverOctoTestApp
 */
angular.module('silverOctoTestApp')
  .controller('AddMedicationCtrl', function ($scope, $log, pillbox, pillDescription) {

    $scope.colors = pillDescription.getColors();
    $scope.shapes = pillDescription.getShapes();

    $scope.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // $scope.search = {
    //   color: true,
    //   size: true
    // };

    $scope.lookup = function lookup(code) {
    
      pillbox.lookup({ 
        ingredient: code
      }).then(function (pillResults) {
        var dataList = pillResults.Pills.pill;

        if (dataList) {

          $scope.results = dataList.map(function (medication) {
            var item = {
              ingredients: medication.INGREDIENTS,
              imageId:     medication.image_id,
              color:       pillDescription.getColorFromCode(medication.SPLCOLOR),
              shape:       pillDescription.getShapeFromCode(medication.SPLSHAPE),
              size:        medication.SPLSIZE,
              score:       medication.SCORE,
              imprint:     medication.SPLIMPRINT,
              id:          medication.SETID
            };
            return item;
          });

        } else {
          $log.warn("No results.");
        }

        $log.debug(pillResults.Pills.pill)
      })

    };

  });
