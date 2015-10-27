module.exports = 'public';

var merge = require('broccoli-merge-trees');

module.exports = merge(['public', 'bower_components/normalize-css', 'bower_components/font-awesome'], { overwrite: true });
