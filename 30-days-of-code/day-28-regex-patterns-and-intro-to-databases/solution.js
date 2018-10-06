"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;
let table;

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

function main() {
  const N = parseInt(readLine(), 10);
  table = [];
  for (let NItr = 0; NItr < N; NItr++) {
    const firstNameEmailID = readLine().split(" ");

    const firstName = firstNameEmailID[0];

    const emailID = firstNameEmailID[1];
    table.push(firstNameEmailID);
  }

  let pattern = /@gmail\.com$/i;
  const filteredTable = table.filter(item => {
    return pattern.test(item[1]);
  });

  var result = filteredTable.map(item => item[0]).sort();

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}
