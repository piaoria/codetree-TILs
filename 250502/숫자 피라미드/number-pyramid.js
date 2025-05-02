const fs = require("fs");

const inputInt = Number(fs.readFileSync(0).toString().trim());

function printOneToInt(intNum) {
    for (let i = 1; i <= intNum; i ++) {
        let result = [];

        for (let j = 1; j <= i; j ++) {
            result.push(i);
        };

        console.log(result.join(" "));
    };
};

printOneToInt(inputInt);