module.exports = function(config){
  'use strict';
  config.set({

    basePath : '../',

    files : [
      'app/js/vendor/jquery.js',
      'app/js/vendor/angular.js',
      'app/js/vendor/angular-route.js',
      'app/js/vendor/angular-mocks.js',
      'app/js/vendor/bootstrap.js',
      'app/js/utils.js',
      'app/js/app.js',
      'app/js/services.js',
      'app/js/controllers.js',
      'app/js/filters.js',
      'app/js/directives.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};