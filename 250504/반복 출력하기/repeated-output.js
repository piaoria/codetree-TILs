const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim().split('\n'));

function printNRepeat(count) {
    for (let i = 0; i < count; i ++) {
        process.stdout.write("12345^&*()_\n");
    }

    return;
}

printNRepeat(inputNum);