'use strict';

const fs = require('fs');

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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  const arr = Array(n+2).fill(0);
  queries.forEach(query => {
    arr[query[0]] += query[2];
    arr[query[1]+1] += -query[2];
  });
  
  let maximum = 0;
  let i;
  for(i=2; i<=n; i++) {
    arr[i] += arr[i-1];
    if(maximum < arr[i]){
      maximum = arr[i];
    }
  }
  return maximum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}

/**
 * Reference: https://www.geeksforgeeks.org/constant-time-range-add-operation-array/
 */