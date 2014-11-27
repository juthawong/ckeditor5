/* jshint node: true */

'use strict';

var tools = require( './res/tools' );

module.exports = function( grunt ) {
	tools.setupMultitaskConfig( grunt, {
		task: 'jscs',
		defaultOptions: grunt.file.readJSON( 'dev/tasks/jscs-config.json' ),
		targets: {
			all: function() {
				return [ '**/*.js' ];
			},
			git: function() {
				return tools.getGitDirtyFiles().filter( function( file ) {
					return ( /\.js$/ ).test( file );
				} );
			}
		}
	} );

	grunt.loadNpmTasks( 'grunt-jscs' );
};