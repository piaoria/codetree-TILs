const fs = require("fs");
let a = fs.readFileSync(0).toNumber().trim();

a = a + 2

console.log(a)