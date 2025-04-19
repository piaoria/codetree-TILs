const fs = require("fs");

const inputNumList = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(inputNumList[0])
let b = Number(inputNumList[1])

function printTestResult (numA, numB) {
    console.log(numA < numB ? 1 : 0, numA === numB ? 1 : 0)
}

printTestResult(a, b)