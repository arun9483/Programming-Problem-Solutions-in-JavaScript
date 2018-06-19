process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    const intVariable = i + parseInt(readLine().trim(), 10);
    const dblVariable = (d + Number(readLine().trim())).toFixed(1);
    const strVariable = `${s}${readLine().trim()}`;

    const result = `${intVariable}
${dblVariable}
${strVariable}`;

  const fs = require('fs');
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  ws.write(result + '\n');
  ws.end();
}
