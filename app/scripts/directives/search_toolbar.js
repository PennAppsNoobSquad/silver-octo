'use strict';

/**
 * @ngdoc directive
 * @name silverOctoTestApp.directive:searchToolbar
 * @description
 * # searchToolbar
 */
angular.module('silverOctoTestApp')
  .directive('searchToolbar', function (houndify) {
    return {
      templateUrl: 'views/search_toolbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.voiceSearchInProgress = false;

        scope.toggleVoiceSearch = function toggleVoiceSearch() {
          scope.voiceSearchInProgress = houndify.toggleVoiceSearch();
        };

        scope.textSearch = function textSearch(search) {
          houndify.textSearch(search);
        };
      }
    };
  });