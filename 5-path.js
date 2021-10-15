const path = require('path')

console.log(path.sep);

const filePath = path.join('/model','text.txt')
const absolute = path.resolve(__dirname,'model','text.txt')
const baseName = path.basename(filePath)
console.log(absolute);
console.log(baseName);
console.log(filePath);