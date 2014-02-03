/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    concat: {
      options: {
        stripBanners: true
      },
      background: {
        src: [
          'src/stringutils.js',
          'src/binaryfile.js',
          'src/bufferedbinaryajax.js',
          'src/filereader.js',
          'src/id3.js',
          'src/id3v1.js',
          'src/id3v2.js',
          'src/id3v2frames.js',
          'src/id4.js'
        ],
        dest: 'dist/id3.js'
      }
    },
    uglify: {
      dist: {
        src: 'dist/id3.js',
        dest: 'dist/id3-minimized.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['concat', 'uglify']);

};
