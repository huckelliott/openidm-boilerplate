/* This default Gruntfile only watches for changes to the src/main/resources files and 
 * copies them to the target/openidm_project folder. This makes it easier to develop your project
 * in your source working copy without having to manually rebuild the target after each change.
 * 
 * If you need more sophisticated build processes (such as UI minification, for example) then you 
 * can add that logic to this file with additional grunt plugins (be sure to update package.json)
*/
module.exports = function(grunt) {

    grunt.initConfig({
        sync: {
            custom: {
                files: [{
                    cwd     : 'src/main/resources',
                    src     : ['**/*'], 
                    dest    : 'target/openidm_project',
                    flatten : false,
                    expand  : true
                }]
            }
        },
        watch: {
            copyIDM: {
                files: ['src/main/resources/**'],
                tasks: [ 'sync' ]
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask('default', ['sync', 'watch']);

};
