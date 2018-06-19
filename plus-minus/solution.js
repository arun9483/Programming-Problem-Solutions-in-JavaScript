'use strict';
const fs = require('fs');
const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  let counter = {
    zero: 0,
    positive: 0,
    negative: 0
  };
  
  arr.forEach(item => {
    if(item > 0) {
      counter.positive += 1;
    } else if(item < 0) {
      counter.negative += 1;
    } else {
      counter.zero += 1;
    }
  });
  
  let result = `${(counter.positive / arr.length).toFixed(6)}
${(counter.negative / arr.length).toFixed(6)}
${(counter.zero / arr.length).toFixed(6)}`
  
  return result;
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = plusMinus(arr);
    ws.write(result + '\n');
}
