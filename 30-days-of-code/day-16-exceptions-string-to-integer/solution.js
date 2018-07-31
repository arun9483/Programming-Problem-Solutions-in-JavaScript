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

function main() {
  const S = readLine();
  try {
    let n = eval(S); 
    /**
     * Question: why eval worked correctly?
     * Answer: value of S would be searched as variable name in case of S is string; 
     * so it will throw an error. while in case of number eval will just return that number.
     */
    console.log(n);
  } catch (e) {
    console.log("Bad String");
  }
}
