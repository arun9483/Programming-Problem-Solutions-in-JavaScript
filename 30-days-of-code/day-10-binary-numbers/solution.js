'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getContinuousMax1s(n) {
  const binaryValue = n.toString(2);
  let maximum1s = 0;
  let currentCount = 0;
  for(let value of binaryValue) {
    value = parseInt(value, 10);
    if(value) {
      currentCount++;
    } else {
      if(maximum1s < currentCount) {
        maximum1s = currentCount;
      }
      currentCount = 0;
    }
  }
  if(maximum1s < currentCount) {
    maximum1s = currentCount;
  }
  return maximum1s;
}

function main() {
    const n = parseInt(readLine(), 10);
    const result = getContinuousMax1s(n);
    console.log(result);
}
