const { readFile, writeFile, read } = require('fs');
console.log('Starting');
readFile('./content/first.txt', 'utf8', (err, first) => {
  if (err) {
    console.error(err);
    return;
  }
  readFile('./content/second.txt', 'utf8', (err, second) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(first, second);
    const result = `Here is the result: ${first}, ${second}`;
    writeFile('./content/result-async.txt', result, { flag: 'a' }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('File written successfully');
    });
  });
});
console.log('Starting next task');