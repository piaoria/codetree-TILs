const fs = require("fs");

const inputNumArray = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function printUntilZero(array) {
    let idx = 0;
    
    while (true) {
        if (array[idx] === 0) {
            return;
        } else {
            console.log(array[idx]);
            idx ++;
        };
    };
};

printUntilZero(inputNumArray);