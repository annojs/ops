var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('gte', 'a >= b').
    on(is.number, is.number, function(a, b) {
        return a >= b;
    });
