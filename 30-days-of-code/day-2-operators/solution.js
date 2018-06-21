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

// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
  const totalCost = (meal_cost + meal_cost*(tip_percent/100) + meal_cost*(tax_percent/100)).toFixed(0);
  return `The total meal cost is ${totalCost} dollars.`;
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    const message = solve(meal_cost, tip_percent, tax_percent);

    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    ws.write(message + '\n');
    ws.end();
}
