define([], function () {
    var utils = {
        hasClass: function (el, className) {
            var elClasses = el.className.split(' ');
            return elClasses.indexOf(className) >= 0;
        }
    };

    return utils;
});
