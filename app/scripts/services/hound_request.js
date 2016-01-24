'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.houndRequest
 * @description
 * # houndRequest
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('houndRequest', function ($http, $log, houndify) {
    // Service logic

    // var requestObject = {
    //   url: 'https://api.houndify.com/v1/text',
    //   headers: {
    //       'Hound-Request-Authentication': {client-id-string-here},
    //       'Hound-Client-Authentication': {signature-string-here},
    //       'Hound-Request-Info': JSON.stringify(houndRequest)
    //   },
    // }

    // Public API here
    return {
      get: function get(query) {
        return $http({

        });
      }
    };
  });
