var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('eq', 'a === b').
    on(is.any, is.any, function(a, b) {
        return a === b;
    });

