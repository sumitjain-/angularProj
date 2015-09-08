module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
	grunt.initConfig({
        sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'main.css': 'main.scss'
	            }
	        }
	    },
        watch: {
            css: {
                files: '**/*.scss'
                ,tasks: ['sass']
            }
        }
	});

	grunt.loadNpmTasks('grunt-serve');
    grunt.registerTask('default', ['watch']);
}