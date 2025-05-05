const fs = require("fs");
const inputYear = Number(fs.readFileSync(0).toString().trim());

const isLeapYear = (intN) => {
    if (intN % 4 === 0) {

        if (intN % 100 === 0 && intN % 400 !== 0) {
        
            return false;
        }

        return true;
    }

    return false;
}

console.log(isLeapYear(inputYear));