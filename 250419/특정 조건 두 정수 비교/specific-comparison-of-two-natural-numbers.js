const fs = require("fs");

const inputNumList = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(inputNumList[0])
let b = Number(inputNumList[1])

function printTestResult (numA, numB) {
    
    let testA;
    let testB;

    if (numA < numB) {
        testA = 1;
    } else {
        testA = 0;
    }

    if (numA === numB) {
        testB = 1;
    } else {
        testB = 0;
    }

    console.log(testA, testB)
}

printTestResult(a, b)