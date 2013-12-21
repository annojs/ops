var annotate = require('annotate');
var is = require('annois');


module.exports = annotate('rdiv', 'b / a').
    on(is.number, is.number, function(a, b) {
        return b / a;
    });
