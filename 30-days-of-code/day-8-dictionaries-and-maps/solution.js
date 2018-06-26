function processData(input) {
    _input_lines = input.trim().split('\n');
    main();
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";
var _input_lines;
var _line_counter = 0;

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function readLine() {
  return _input_lines[_line_counter++];
}

function main() {
  const entries = parseInt(readLine().trim(), 10);
  const phoneBook = new Map();
  let i, entry;
  for(i=0;i<entries; i++) {
    entry = readLine().trim().split(' ');
    phoneBook.set(entry[0].trim(), entry[1].trim());
  }
  let query, phoneNumber;
  while(query = readLine()) {
    phoneNumber = phoneBook.get(query.trim())
    if(phoneNumber){
      console.log(`${query}=${phoneNumber}`);
    } else {
      console.log('Not found');
    }
    query = null;
  }
}
