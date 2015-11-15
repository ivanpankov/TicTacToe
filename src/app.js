requirejs.config({
    baseUrl: './',
    paths: {
        app: './app'
    }
});

requirejs(['./app/main.js']);
