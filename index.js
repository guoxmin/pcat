//vi pcat/index.js
var fis = module.exports =  require('fis3');

fis.cli.version = require('./version.js');

fis.require.prefixes.unshift('pcat');
fis.cli.name = 'pcat';
fis.cli.info = require('./package.json');

