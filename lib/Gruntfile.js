module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['../JS/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6 
        globalstrict: true,
        globals: {"Sandwich":true} //name value pairs, allows to define global vars used in many files.
      }
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../CSS/styles.css': '../SASS/styles.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../JS/**/*.js'], 
        tasks: ['jshint']
      },
      sass: {
        files: ['../SASS/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'watch']);
};



