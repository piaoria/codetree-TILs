const inputIntN = Number(require("fs").readFileSync(0).toString().trim());

let printNum = 0;

function printNumberPyramid(init, len) {
    let result = [];

    for (let j = 0; j < len; j ++) {
        result.push(init + j + 1);
    };

    console.log(result.join(" "));

    return result[len - 1];
};

for (let i = 1; i <= inputIntN; i ++) {
    printNum = printNumberPyramid(printNum, i);
};