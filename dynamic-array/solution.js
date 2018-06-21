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
  inputString = inputString.trim().split('\n').map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the dynamicArray function below.
 */
function dynamicArray(n, queries) {
  const seqList = new Array(n);
  let result = [];
  let lastAnswer = 0;
  let index, seq, elementValue;
  // array.fill([]) or array.fill(new Array(0)) assigns same array refrence to all elements.
  // array.forEach can not be used because it does not iterate over sparse array
  for (let i = 0; i < n; i++) {
    seqList[i] = [];
  }

  queries.forEach(query => {
    index = (query[1] ^ lastAnswer) % n;
    if (query[0] === 1) {
      seq = seqList[index];
      seq.push(query[2]);
    } else {
      seq = seqList[index];
      elementValue = seq[query[2] % seq.length];
      lastAnswer = elementValue;
      result.push(lastAnswer)
    }
  });

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nq = readLine().split(' ');

  const n = parseInt(nq[0], 10);

  const q = parseInt(nq[1], 10);

  let queries = Array(q);

  for (let queriesRowItr = 0; queriesRowItr < q; queriesRowItr++) {
    queries[queriesRowItr] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  }

  let result = dynamicArray(n, queries);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
