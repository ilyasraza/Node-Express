const { readFileSync, writeFileSync } = require('fs');

console.log('Starting');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);  

console.log('File written successfully');
console.log('Starting synchronous file read and write');
console.log('File read and write completed synchronously');