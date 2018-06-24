function processData() {
  //Enter your code here
  _input = _input.trim().split('\n');
  T = parseInt(readLine().trim(), 10);
  main();
}

function main() {
  let t, str, evenStr, oddStr;
  for (i = 0; i < T; i++) {
    str = readLine().trim();
    evenStr = str.split('').filter((item, index) => index % 2 === 0).join('');
    oddStr = str.split('').filter((item, index) => index % 2 === 1).join('');
    console.log(evenStr, oddStr);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
var inputLine = "";
var lineCount = 0;
var T;

function readLine() {
  return _input[lineCount++];
}

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData();
});
