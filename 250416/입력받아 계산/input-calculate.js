const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

a = Number(a) + 2

console.log(a)