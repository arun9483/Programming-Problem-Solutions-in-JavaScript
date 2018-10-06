"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getMax(n, k) {
  let minmax = 0,
    temp;
  for (let i = 1; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      temp = i & j;
      if (temp < k && temp > minmax) {
        minmax = temp;
      }
    }
  }
  return minmax;
}

function main() {
  const t = parseInt(readLine(), 10);
  let result;
  for (let tItr = 0; tItr < t; tItr++) {
    const nk = readLine().split(" ");

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);
    result = getMax(n, k);
    console.log(result);
  }
}
