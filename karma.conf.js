// Karma configuration

module.exports = function(config) {
    config.set({
        baseUrl: './',

        frameworks: ['jasmine', 'requirejs'],

        files: [
            'test/karma-require.js',
            {pattern: 'test/**/*Spec.js', watched: false, included: false, served: true},
            {pattern: 'src/app/*.js', watched: false, included: false, served: true}
        ],

        exclude: [
            'src/app/main.js'
        ],

        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/app/**/*.js': ['coverage']
        },

        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        browsers: ['PhantomJS']
    });
};
