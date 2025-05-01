const fs = require("fs");

const inputInt = Number(fs.readFileSync(0).toString().trim());

function printOneToInt(intNum) {
    for (let i = 1; i <= num; i ++) {
        let result = [];

        for (let j = 1; j <= num; j ++) {
            result.push(j);
        };

        console.log(result.join(" "));
    };
};

printOneToInt(inputInt);