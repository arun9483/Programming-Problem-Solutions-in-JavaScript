process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sort(a) {
  let swapCount = 0;
  let n = a.length;
  for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(a, j, j + 1);
        numberOfSwaps++;
      }
    }
    swapCount += numberOfSwaps;
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  return swapCount;
}

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  let swapCount = sort(a);
  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
