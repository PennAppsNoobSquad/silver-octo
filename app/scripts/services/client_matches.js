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

    var matches = [{
      "Expression" : "\"what\" . \"medicine\" . \"do\" . \"I\" . \"take\" . \"next\"",   
      "Result" : { "Intent" : "TURN_LIGHT_ON" },
      "SpokenResponse" : "Ok, I'm turning the lights on.",
      "SpokenResponseLong" : "Ok, I'm turning the lights on.",
      "WrittenResponse" : "Ok, I'm turning the lights on.",
      "WrittenResponseLong" : "Ok, I'm turning the lights on."
    }, {
      "Expression" : "\"when\" . \"do\" . \"I\" . \"take\" . \"my\" . \"ibuprofen\"",   
      "Result" : { "Intent" : "TURN_LIGHT_ON" },
      "SpokenResponse" : "Ok, I'm turning the lights on.",
      "SpokenResponseLong" : "Ok, I'm turning the lights on.",
      "WrittenResponse" : "Ok, I'm turning the lights on.",
      "WrittenResponseLong" : "Ok, I'm turning the lights on."
    }];

    // Public API here
    return {
      get: function () {
        return matches;
      }
    };
  });
