const fs = require("fs");

const inputScore = Number(fs.readFileSync(0).toString().trim())

function printExamResult(score) {
    if (score >= 80) {
        console.log("pass")
    } else {
        console.log(`${80 - score} more score`)
    }
}

printExamResult(inputScore)