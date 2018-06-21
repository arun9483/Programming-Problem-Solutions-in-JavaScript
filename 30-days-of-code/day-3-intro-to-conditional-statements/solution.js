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

function solution(N, ws) {
  const isEven = N%2 === 0;
  if (!isEven){
    ws.write('Weird\n');
  }
  else {
    if (N>=2 && N<=5) {
      ws.write('Not Weird\n');
    }
    else if (N>=6 && N<=20) {
      ws.write('Weird\n');
    }
    else {
      ws.write('Not Weird\n');
    }
  }
}

function main() {
    const N = parseInt(readLine(), 10);
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    solution(N, ws);
    ws.end();
}
