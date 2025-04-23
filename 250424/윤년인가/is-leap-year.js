const inputYear = parseInt(require("fs").readFileSync(0).toString().trim(), 10);

console.log(inputYear % 4 === 0 ? (inputYear % 100 === 0) && (inputYear % 400 !== 0) ? "false" : "true" : "false");