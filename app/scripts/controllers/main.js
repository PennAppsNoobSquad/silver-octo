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
      var prescriptionItem, text; // should be firebase object eventually
      prescriptionItem = $scope.prescriptions.filter(function (prescription) {
        return prescription.name.toLowerCase() === result.Name.toLowerCase();
      })[0];

      if (result.Intent === 'ASK_MED_LAST_TAKEN') {
        if (prescriptionItem.lastTaken) {
          text = 'You have taken ' + result.Name + ' ' + moment(prescriptionItem.lastTaken).fromNow() + '.'; // compare moments
        } else {
          text = 'You have not taken ' + result.Name + ' recently.';
        }

        if (prescriptionItem.nextDosage) {
          text += 'Your next dosage is ' + prescriptionItem.nextDosage;
        }

        addToFeed({
          text: text
        });

      } else if (result.Intent === 'TOOK_MED') {
        prescriptionItem.lastTaken = new Date();

        if (prescriptionItem && prescriptionItem.quantity) {
          $log.debug(prescriptionItem.quantity);
          prescriptionItem.quantity = prescriptionItem.quantity - 1;
          addToFeed({
            text: 'You have ' + prescriptionItem.quantity + ' pills left of ' + result.Name + '.',
            button: 'Schedule Refill'
          });
        }
      }

    };

    $scope.prescriptions = [{
      name: "Heart medicine",
      quantity: 20,
      frequency: "Twice a day",
      nextDosage: 'tonight before bed'
    }, {
      name: "Advil",
      frequency: "After dinner"
    }, {
      name: "Cholesterol pills",
      quantity: 15,
      frequency: "As needed",
      lastTaken: moment('2016-01-22', 'YYYY-MM-DD')
    }, {
      name: "Levothyroxine",
      quantity: 22,
      frequency: "Every morning"
    }];

    $scope.feed = [];

    $scope.$on('houndResponse', function (event, data) {
      var newEvent = data.AllResults[0];
      addToFeed(newEvent);
      if (newEvent.Result) {
        handleEventIntent(newEvent.Result);
      }
    });
  });
