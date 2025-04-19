const fs = require("fs");

const temp = Number(fs.readFileSync(0).toString().trim());

function printWaterTemerature (temprature) {
    if (temprature < 0) {
        console.log("ice")
    } else if (temprature >= 100) {
        console.log("vapor")
    } else {
        console.log("water")
    }
}

printWaterTemerature(temp)