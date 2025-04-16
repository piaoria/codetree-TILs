const fs = require("fs");
let n = fs.readFileSync(0).toString().trim()

console.log(`Your score is ${n} point.`)