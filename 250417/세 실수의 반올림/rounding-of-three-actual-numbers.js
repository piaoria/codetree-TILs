const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 3; i++ ) {
    console.log(Number(input[i]).toFixed(3))
}