'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
  _input = _input.split(new RegExp('\n'));
  main();
});
function readLine() { return _input[_index++]; }

/**** Ignore above this line. ****/

function printArray(arr) {
  for (let i=0; i<arr.length; i++) {
    console.log(arr[i]);
  }
}

function main() {
  let n = parseInt(readLine());
  arr = readLine().split(" ");
  arr = arr.map(Number);
  printArray(arr);
  n = parseInt(readLine());
  arr = readLine().split(" ");
  printArray(arr);
}
