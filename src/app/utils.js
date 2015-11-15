define([], function () {
    var utils = {
        hasClass: function (el, className) {
            var elClasses = el.className.split(' ');
            return elClasses.indexOf(className) >= 0;
        },

        setClass: function (el, className) {
            if (!this.hasClass(el, className)) {
                el.className += (' ' + className);
            }
        }
    };

    return utils;
});
