var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('lt', 'a < b').
    on(is.number, is.number, function(a, b) {
        return a < b;
    });
