function processData(input) {
  //Enter your code here
  function isPrime(n) {
    if (n < 2 ) {
      return false;
    }

    let m = Math.sqrt(n);
    for(let i = 2; i<=m; i++) {
      if(n%i === 0) {
        return false;
      }
    }
    return true;
  }
  input = input.split("\n");
  let T = parseInt(input[0]);
  let i = 1;
  while (i <= T) {
    if (isPrime(parseInt(input[i]))) {
      console.log("Prime");
    } else {
      console.log("Not prime");
    }
    i++;
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
