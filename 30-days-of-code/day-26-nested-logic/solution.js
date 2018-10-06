function processData(input) {
  var dates = input.split('\n');
  var actual = dates[0].split(' ').map(item => parseInt(item));
  var expected = dates[1].split(' ').map(item => parseInt(item));
  var fine = calFine(actual, expected);
  console.log(fine);
}

function calFine(actual, expected) {
  if (actual[2] === expected[2]) {
    if (actual[1] === expected[1]) {
      if (actual[0] <= expected[0]) {
        return 0;
      } else {
        return 15 * (actual[0] - expected[0]);
      }
    } else if (actual[1] < expected[1]) {
      return 0;
    } else {
      return 500 * (actual[1] - expected[1]);
    }
  } else if (actual[2] < expected[2]) {
    return 0;
  } else {
    return 10000;
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
