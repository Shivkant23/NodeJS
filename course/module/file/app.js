const fs = require('fs');
//fs.access // as this method is non-blocking so we are usnig this method.

const files = fs.readdirSync('../');
console.log(files);