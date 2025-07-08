// fileOps.js
const fs = require('fs');

fs.writeFileSync('sample.txt', 'Hello from Node.js file system!');
const data = fs.readFileSync('sample.txt', 'utf-8');
console.log('File content:', data);
