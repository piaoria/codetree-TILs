const fs = require("fs");

const inputNumList = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(inputNumList[0])
let b = Number(inputNumList[1])

function printTestResult (numA, numB) {
    if (numA > numB) {
        console.log(numA * numB)
    } else {
        console.log((numB / numA).toFixed(0))
    }
}

printTestResult(a, b)