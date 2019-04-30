require('./dir/index.js');
require('./dir/../dir/index.js');
require('./../dir/../dir/index.js');

console.log('this causes a lint error');