define([], function () {
    /**
     * Represents common utils .
     *
     * @exports utils
     */
    var utils = {
        hasClass: function (el, className) {
            var elClasses = el.className.split(' ');
            return elClasses.indexOf(className) > -1;
        },

        setClass: function (el, className) {
            if (!this.hasClass(el, className)) {
                el.className += (' ' + className);
            }
        },

        removeClass: function(el, className) {
            var elClasses = el.className.split(' ');
            var index = elClasses.indexOf(className);

            if (index > -1) {
                elClasses.splice(index, 1);
                el.className = elClasses.join(' ');
            }
        }
    };

    return utils;
});
