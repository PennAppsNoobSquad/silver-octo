'use strict';

/**
 * @ngdoc service
 * @name silverOctoTestApp.pillDescription
 * @description
 * # pillDescription
 * Factory in the silverOctoTestApp.
 */
angular.module('silverOctoTestApp')
  .factory('pillDescription', function () {
    // Service logic
    var colorList = {
      "BLACK":      "C48323",
      "BLUE":       "C48333",
      "BROWN":      "C48332",
      "GRAY":       "C48324",
      "GREEN":      "C48329",
      "ORANGE":     "C48331",
      "PINK":       "C48328",
      "PURPLE":     "C48327",
      "RED":        "C48326",
      "TURQUOISE":  "C48334",
      "WHITE":      "C48325",
      "YELLOW":     "C48330"
    };

    var shapeList = {
      "BULLET":         "C48335",
      "CAPSULE":        "C48336",
      "CLOVER":         "C48337",
      "DIAMOND":        "C48338",
      "DOUBLE CIRCLE":  "C48339",
      "FREEFORM":       "C48340",
      "GEAR":           "C48341",
      "HEPTAGON":       "C48342",
      "HEXAGON":        "C48343",
      "OCTAGON":        "C48344",
      "OVAL":           "C48345",
      "PENTAGON":       "C48346",
      "RECTANGLE":      "C48347",
      "ROUND":          "C48348",
      "SEMI-CIRCLE":    "C48349",
      "SQUARE":         "C48350",
      "TEAR":           "C48351",
      "TRAPEZOID":      "C48352",
      "TRIANGLE":       "C48353"
    };

    // Public API here
    return {
      getColorCode: function getColorCode(color) {
        color = color.toUpperCase();
        if (colorList[color]) {
          return colorList[color];
        } else {
          $log.warn("No color code found for", color);
          return;
        }
      },
      getShapeCode: function getShapeCode(shape) {
        shape = shape.toUpperCase();
        if (shapeList[shape]) {
          return shapeList[shape];
        } else {
          $log.warn("No shape code found for", shape);
          return;
        }
      }
    };
  });
