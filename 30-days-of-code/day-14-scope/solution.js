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

class Difference {
  constructor(elements) {
    this._elements = elements;
    this.maximumDifference = 0;
  }

  computeDifference() {
    const min = Math.min(...this._elements);
    const max = Math.max(...this._elements);
    this.maximumDifference = max - min;
  }
}

function main() {

  let i, item, N;
  let elements = [];

  N = parseInt(readLine().trim(), 10);
  for (i = 0; i < N; i++) {
    item = parseInt(readLine().trim(), 10);
    elements.push(item);
  }
  const d = new Difference(elements);
  d.computeDifference();

  console.log(d.maximumDifference + '\n');
}
