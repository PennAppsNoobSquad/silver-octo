'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.clientMatches
 * @description
 * # clientMatches
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('clientMatches', function () {
    // Service logic
    var matches = [];

    var buildRestOfMatchObject = function buildRestOfMatchObject(matchObject, responseText) {

      matchObject['SpokenResponse'] = responseText;
      matchObject['SpokenResponseLong'] = responseText;
      matchObject['WrittenResponse'] = responseText;
      matchObject['WrittenResponseLong'] = responseText;

      return matchObject;
    };

    var medList = ['ibuprofen', 'advil', 'heart medicine', 'cholesterol pills', 'insulin'];

    medList.forEach(function (medName) {
      var responseText = "Okay, making a note that you took " + medName + ".";
      var matchObject = {
        "Expression": "\"i\" . [\"just\"] . (\"took\" | \"swallowed\") . [\"my\" | \"the\"] . \""+medName+"\"",   
        "Result":     { "Intent" : "TOOK_MED", "Name": medName },
      };

      matchObject = buildRestOfMatchObject(matchObject, responseText);
      matches.push(matchObject);
    });

    medList.forEach(function (medName) {
      var responseText = "Checking when you last took " + medName + ".";
      var matchObject = {
        "Expression": "[\"when\"] . \"did\" . [\"i\"] . [\"last\"] . \"take\" . [\"my\"] . \""+medName+"\"",   
        "Result":     { "Intent" : "ASK_MED_LAST_TAKEN", "Name": medName },
      };

      matchObject = buildRestOfMatchObject(matchObject, responseText);
      matches.push(matchObject);
    }); 

    // Public API here
    return {
      get: function () {
        return matches;
      }
    };
  });
