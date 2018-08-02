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

class Calculator {
  divisorSum(n) {
    let sum = 0;
    let i = 2;
    for (i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        sum += i;
      }
    }
    if (n > 1) {
      return sum + 1 + n;
    } else {
      return 1;
    }
  }
}

function main() {
  // read the number n
  var n = readLine();

  let myCalculator = new Calculator();
  const sum = myCalculator.divisorSum(n);
  console.log("I implemented: AdvancedArithmetic");
  console.log("sum");
}
