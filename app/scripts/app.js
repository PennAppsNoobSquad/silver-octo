'use strict';

/**
 * @ngdoc overview
 * @name silverOctoTestApp
 * @description
 * # silverOctoTestApp
 *
 * Main module of the application.
 */
angular.module('silverOctoTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase',
    'firebase.ref',
    'firebase.auth',
    'ngMaterial',
    'xml'
  ])
  .config(function (x2jsProvider, $mdThemingProvider) {
    
    x2jsProvider.config = {
      arrayAccessFormPaths: ['Pills.pill']
    };

    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue')
      .accentPalette('indigo');

    $mdThemingProvider.theme('toolbar')
      .primaryPalette('grey')
      .accentPalette('light-blue');
      
  });