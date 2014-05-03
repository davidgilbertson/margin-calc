'use strict';


// Declare app level module which depends on filters, and services
angular.module('mc', [
  'ngRoute',
  'mc.filters',
  'mc.services',
  'mc.directives',
  'mc.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/calculator.html', controller: 'Calculator'});
  $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'Settings'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);