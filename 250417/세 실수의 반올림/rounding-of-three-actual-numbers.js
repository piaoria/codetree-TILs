const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));