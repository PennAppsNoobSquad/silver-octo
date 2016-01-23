'use strict';

/**
 * @ngdoc directive
 * @name silverOctoTestApp.directive:searchToolbar
 * @description
 * # searchToolbar
 */
angular.module('silverOctoTestApp')
  .directive('searchToolbar', function () {
    return {
      templateUrl: 'views/search_toolbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });