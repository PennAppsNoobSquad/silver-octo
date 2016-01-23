'use strict';

/**
 * @ngdoc directive
 * @name silverOctoTestApp.directive:searchToolbar
 * @description
 * # searchToolbar
 */
angular.module('silverOctoTestApp')
  .directive('searchToolbar', function ($log, houndify, Auth, Ref, $firebaseObject) {
    return {
      templateUrl: 'views/search_toolbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        Auth.$requireAuth().then(function (user) {
          scope.user = $firebaseObject(Ref.child('users/'+user.uid));
        });

        scope.toggleVoiceSearch = function toggleVoiceSearch() {
          scope.voiceSearchInProgress = houndify.toggleVoiceSearch();
        };

        scope.searchText = function searchText(search) {
          houndify.search(search);
        };
      }
    };
  });