const fs = require("fs");

const input_data = fs.readFileSync(0).toString().trim().split();

const sum_num = Number(input_data[0])+Number(input_data[1])

console.log((sum_num, sum_num / length(input_data)).toFixed(2))