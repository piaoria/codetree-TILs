const fs = require("fs");

const [intNum, ...data] = fs.readFileSync(0).toString().trim().split("\n");

console.log(intNum);
console.log(data.split(" "));