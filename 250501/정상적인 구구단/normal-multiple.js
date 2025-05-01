const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function printMultiplicationTable(num) {
    for (let i = 1; i <= num; i ++) {
        let result = [];

        for (let j = 1; j <= num; j ++) {
            result.push(`${i} * ${j} = ${i * j}`);
        };

        console.log(result.join(", "));
    };

    return;
};

printMultiplicationTable(inputNum);