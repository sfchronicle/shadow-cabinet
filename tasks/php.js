/*

Sets up a PHP server to work from the /build folder.

*/

module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-php");
  
  grunt.config.merge({
    php: {
        test: {
            options: {
                keepalive: true,
                open: true,
                base: 'build',
            }
        }
    }
  })

};
