'use strict';

/**
 * @ngdoc directive
 * @name silverOctoTestApp.directive:searchToolbar
 * @description
 * # searchToolbar
 * Allows for voice navigation within the app
 */
angular.module('silverOctoTestApp')
  .directive('searchToolbar', function ($log, Auth, Ref, $firebaseObject) {
    return {
      templateUrl: 'views/search_toolbar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        Auth.$requireAuth().then(function (user) {
          scope.user = $firebaseObject(Ref.child('users/'+user.uid));
        });
      },
      controller: "SearchToolbarCtrl"
    };
  });