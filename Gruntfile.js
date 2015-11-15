module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        karma: {
            dev: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },

        requirejs: {
            build: {
                options: {
                    baseUrl: 'src/',
                    out: 'dist/app.js',
                    name: '../node_modules/almond/almond',
                    include: ['app']
                }
            }
        },

        copy: {
            build: {
                files: [
                    {expand: true, flatten: true, src: ['src/img/**.png'], dest: 'dist/img/'}
                ]
            }
        },

        clean: {
            build: ['dist'],
            dev: ['coverage'],
            doc: ['doc']
        },

        processhtml: {
            options: {
                data: {

                }
            },
            build: {
                files: {
                    'dist/index.html': ['src/index.html']
                }
            }
        },

        jsdoc: {
            dev: {
                src: ['src/app/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        less: {
            dev: {
                files: {'src/styles.css': 'src/styles.less'}
            },
            build: {
                options: {
                    plugins: [
                        new (require('less-plugin-clean-css'))({'s1': true})
                    ]
                },
                files: {'dist/styles.css': 'src/styles.less'}
            }
        }
    });


    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-less');



    grunt.registerTask('test', ['clean:dev', 'karma:dev']);
    grunt.registerTask('doc', ['clean:doc', 'jsdoc:dev']);
    grunt.registerTask('default', ['clean:build', 'requirejs:build', 'processhtml:build', 'less:build', 'copy']);
};
