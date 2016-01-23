'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.pillbox
 * @description
 * # pillbox
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('pillbox', function () {
    // Service logic
    var key = '1H9FOOCCOA';
    var endpoint = 'http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php';

    var $ = $window.$;

    var transformResponse = function transformResponse(xml) {
      var data = x2js.xml_str2json(xml);
      $log.debug("Transform response", data);
      return data;
    };

    // Public API here
    return {
      lookup: function (params) {
        params.key = key;

        return $http({
          url: endpoint,
          params: params,
          headers: {
            'Content-Type': 'text/xml'
          }
        }).then(function (response) {
          $log.debug("Pillbox response", response);
          return transformResponse(response.data);
        }, function (error) {
          $log.warn("Pillbox error", error);
          return error;
        });

      }
    };
  });
