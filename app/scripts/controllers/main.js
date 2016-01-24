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
      $scope.feed.push(event);
      $scope.$apply();
    };

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

    $scope.feed = [];

    $scope.$on('houndResponse', function (event, data) {
      $log.debug(data);
      data.AllResults[0].date = new Date();

      addToFeed(data.AllResults[0]);
    });



  });
