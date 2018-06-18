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
  
  // inputString = inputString.replace(/\s*$/, '')
  //     .split('\n')
  //     .map(str => str.replace(/\s*$/, ''));
  
  inputString = inputString.trim()
      .split('\n')
      .map(str => str.trim());
  main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
  let arr = ar.join(' ')
    .split(' ')
    .map(str => str.split('').reverse().join(''));
  
  let maxLength = 0;
  arr.forEach(item => {
    if(maxLength < item.length)
      maxLength = item.length;
  })
  
  let result = new Array(maxLength+1);
  result.fill(0);
  
  let i;
  for(i=0; i<maxLength; i++) {
    let sum = result[i];
    arr.forEach(item => {
      if(i < item.length)
        sum += parseInt(item[i], 10);
    });
    
    if(sum > 9){
      result[i] = sum % 10;
      result[i+1] = Math.floor(sum / 10);
    } else {
		  result[i] = sum;
    }
  }
  result.reverse();
  result = parseInt(result.join(''), 10);
  return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
  
    let result = aVeryBigSum(ar);

    ws.write(result + "\n");

    ws.end();
}
