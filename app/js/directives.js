'use strict';

/* Directives */


angular.module('mc.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('currencyFormat', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {

          function stripSymbols(data) {
              return parseFloat(data.replace(/[^\d\.]/g, ''), 10);
          }

          function addSymbols(data) {
              return '$' + data;
          }
          ngModel.$parsers.push(stripSymbols);
          ngModel.$formatters.push(addSymbols);
      }
    };
  }).
  directive('percentFormat', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {

          function stripSymbols(data) {
              return parseFloat(data.replace(/[^\d\.]/g, ''), 10) / 100;
          }

          function addSymbols(data) {
              return mc.round(data * 100, 2) + '%'; //TODO round number
          }
          ngModel.$parsers.push(stripSymbols);
          ngModel.$formatters.push(addSymbols);
      }
    };
  });
