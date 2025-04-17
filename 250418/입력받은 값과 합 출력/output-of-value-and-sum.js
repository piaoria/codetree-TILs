const fs = require("fs");

const input_data = fs.readFileSync(0).toString().trim().split(" ");

console.log(input_data[0], input_data[1], input_data[0] + input_data[1]);