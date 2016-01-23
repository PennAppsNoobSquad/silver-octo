'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.matcher
 * @description
 * # Matches commands to actions
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('matcher', function ($log) {
    // Service logic
    var matchers = [
        {
            matcher: /^what.*?[medicines?|medications?|prescriptions?].*?[take|have][ ?](.*?)\??$/i,
            handler: function(time) {
                $log.debug("User is asking what medications to take", time);
            }
        },
        {
            matcher: /^when.*?i.*?take[ ?].*?(.*)\??$/i,
            handler: function(medication) {
                $log.debug("User is asking when he needs to take", medication);
            }
        },
        {
            matcher: /^i.*?took ?(.*)/i,
            handler: function(medication) {
                $log.debug("User took", medication);
            }
        },
        {
            matcher: /^.*?[tell|know].*?about[ ?](.*)\??/i,
            handler: function(medication) {
                $log.debug("User wants to know about", medication);
            }
        }
    ];

    // Public API here
    return {
      match: function (string) {
        string = string.toLowerCase();
        string = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
        for (var i = 0; i < matchers.length; i++) {
            var match = matchers[i].matcher.exec(string);
            if(match) {
                matchers[i].handler.apply(null, match.splice(1));
            }
        }
      }
    };
  });
