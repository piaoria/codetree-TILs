const fs = require("fs");

const inputRepeatNumber = Number(fs.readFileSync(0).toString().trim());

function printRepeatLeebrosCode(count) {
    
    result = "";

    for (i = 0; i < count - 1; i ++) {
        result += "LeebrosCode\n";
    }
    result += "LeebrosCode"

    return result;
}

console.log(printRepeatLeebrosCode(inputRepeatNumber));