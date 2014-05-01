'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    // pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourceComments: 'map'
        },
        files: {
            'app/css/main.css': 'app/sass/main.scss'
        }
      }
    },
    watch: {
      files: ['app/sass/*.scss'],
      tasks: 'default' //TODO could this just be 'sass'?
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);

};