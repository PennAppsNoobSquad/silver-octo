'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.matcher
 * @description
 * # matcher
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('matcher', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
