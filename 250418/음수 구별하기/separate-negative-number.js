const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim())

function minus_judge (num) {
    if (num < 0) {
        console.log(`${num}\nminus`);
        return
    }
    console.log(num);
}

minus_judge(n);