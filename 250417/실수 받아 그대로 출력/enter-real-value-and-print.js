const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim())

console.log(Math.round(n*100) / 100)