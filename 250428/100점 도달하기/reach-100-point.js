const fs = require("fs");

const inputScore = Number(fs.readFileSync(0).toString().trim());

function makeGradeArray(score) {
    let result = [];

    while (score < 101) {
        if (score >= 90) {
            result.push("A");
        } else if (score >= 80) {
            result.push("B");
        } else if (score >= 70) {
            result.push("C");
        } else if (score >= 60) {
            result.push("D");
        } else {
            result.push("F");
        }
        score ++;
    };

    return result;
};

console.log(makeGradeArray(inputScore).join(' '));