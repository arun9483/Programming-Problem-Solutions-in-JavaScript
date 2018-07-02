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

function getHourGlassSum(arr, i, j) {
  const sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]
  + arr[i+1][j+1]
  + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
  return sum;
}

function getMaximumHourglassSum(arr) {
  let i, j, maximum, sum;
  maximum = Number.NEGATIVE_INFINITY
  for(i = 0; i<4; i++) {
    for(j=0; j<4; j++) {
      sum = getHourGlassSum(arr, i, j);
      if(maximum < sum) {
        maximum = sum;
      }
    }
  }
  return maximum;
}


function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const result = getMaximumHourglassSum(arr);
    console.log(result);
}
