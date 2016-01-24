'use strict';

/**
 * @ngdoc function
 * @name silverOctoTestApp.controller:SearchToolbarCtrl
 * @description
 * # Controls the search toolbar
 * Controller of the silverOctoTestApp
 */
angular.module('silverOctoTestApp')
  .controller('SearchToolbarCtrl', function ($scope, matcher) {
      $scope.speech = {
        "maxResults": 25,
        "continuous": true,
        "interimResults": true,
        "recognizing": false,
        "value": ""
      };

      $scope.$watch('speech.recognizing', function(newValue, oldValue) {
          if (!$scope.speech.recognizing) {
              matcher.match($scope.speech.value);
          }
      });
  });