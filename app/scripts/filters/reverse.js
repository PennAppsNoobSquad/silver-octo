'use strict';

/**
 * @ngdoc function
 * @name silverOctoTestApp.directive:reverse
 * @description
 * # reverse
 * Reverses an array of items
 */
angular.module('silverOctoTestApp')
  .filter('reverse', function() {
    return function(items) {
      return angular.isArray(items)? items.slice().reverse() : [];
    };
  });
