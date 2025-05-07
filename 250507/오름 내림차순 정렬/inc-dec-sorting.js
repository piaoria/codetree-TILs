const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const nums = input[1].split(' ').map(Number);

console.log(nums.sort((prev, cur) => {return prev - cur;}).join(" "));
console.log(nums.sort((prev, cur) => {return cur - prev;}).join(" "));