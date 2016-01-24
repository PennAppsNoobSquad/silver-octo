'use strict';

/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the silverOctoTestApp
 */
angular.module('silverOctoTestApp')
  .controller('MainCtrl', function ($scope, $log, houndify) {

    var addToFeed = function addToFeed(event) {
      event.date = new Date();
      $scope.feed.push(event);
      $scope.$apply();
    };

    var handleEventIntent = function handleEventIntent(result) {
      var prescriptionItem; // should be firebase object eventually

      if (result.Intent === 'ASK_MED_LAST_TAKEN') {

      } else if (result.Intent === 'TOOK_MED') {
        prescriptionItem = $scope.prescriptions.filter(function (prescription) {
          return prescription.name === result.Name;
        })[0];
        prescriptionItem.quantity = prescriptionItem.quantity - 1;
        addToFeed({
          text: 'You have ' + prescriptionItem.quantity + ' pills left of ' + result.Name + '.'
        });
      }

    };

    $scope.prescriptions = [{
      name: "Heart medicine",
      frequency: "Twice a day"
    }, {
      name: "Advil",
      quantity: 20,
      frequency: "After dinner"
    }, {
      name: "High cholesterol pills",
      frequency: "As needed"
    }, {
      name: "Levothyroxine",
      frequency: "Every morning"
    }];

    $scope.feed = [];

    $scope.$on('houndResponse', function (event, data) {
      var newEvent = data.AllResults[0];

      handleEventIntent(newEvent.Result);
      addToFeed(newEvent);
    });



  });
