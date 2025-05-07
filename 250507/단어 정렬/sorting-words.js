const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const stringArray = input.slice(1);

stringArray.sort();

stringArray.forEach(word => console.log(word));