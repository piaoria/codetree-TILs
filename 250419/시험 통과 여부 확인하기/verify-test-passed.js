const fs = require("fs");

const inputScore = Number(fs.readFileSync(0).toString().trim())

function printExamResult(score) {
    if (score >= 80 && score <= 100) {
        console.log("pass")
    } else {
        console.log(`${100 - score} more score`)
    }
}

printExamResult(inputScore)