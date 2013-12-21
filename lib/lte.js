var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('lte', 'a <= b').
    on(is.number, is.number, function(a, b) {
        return a <= b;
    });
