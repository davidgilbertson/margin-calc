'use strict';

/* Directives */


angular.module('mc.directives', []).
  directive('appVersion', ['version', function(version) {
    //TODO delete appVersion directive, came from angular-seed
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('mcCurrencyFormat', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {

        function stripSymbols(data) {
          return parseFloat(data.replace(/[^\d\.]/g, ''), 10);
        }
        function addSymbols(data) {
          return '$' + mc.round(data, 2);
        }
        element.bind('blur', function() {
          var inputValue = stripSymbols(this.value);
          this.value = addSymbols(inputValue);          
        });

        ngModel.$parsers.push(stripSymbols);
        ngModel.$formatters.push(addSymbols);
      }
    };
  }).
  directive('mcPercentFormat', function() {
    return {
      require: 'ngModel',
      link: function(scope, element, attr, ngModel) {

        function stripSymbols(data) {
          return parseFloat(data.replace(/[^\d\.]/g, ''), 10) / 100;
        }

        function addSymbols(data) {
          return mc.round(data * 100, 2) + '%'; //TODO round number
        }
        element.bind('blur', function() {
          var inputValue = stripSymbols(this.value);
          this.value = addSymbols(inputValue);          
        });

        ngModel.$parsers.push(stripSymbols);
        ngModel.$formatters.push(addSymbols);
      }
    };
  });
