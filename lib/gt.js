var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('gt', 'a > b').
    on(is.number, is.number, function(a, b) {
        return a > b;
    });
