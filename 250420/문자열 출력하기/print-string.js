const fs = require("fs");

const inputRepeatNumber = Number(fs.readFileSync(0).toString().trim());

function printRepeatLeebrosCode(count) {
    for (i = 0; i < count; i ++) {
        console.log("LeebrosCode");
    }
}

printRepeatLeebrosCode(inputRepeatNumber);