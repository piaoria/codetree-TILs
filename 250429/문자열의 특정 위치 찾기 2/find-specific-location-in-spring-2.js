const fs = require("fs");

const inputSpell = fs.readFileSync(0).toString().trim();

const wordList = ["apple", "banana", "grape", "blueberry", "orange"];

function findThirdAndFourthSpellMatchWordList(spell,list) {
    let resultArray = [];
    for (let i = 0; i < 5; i ++) {
        if (list[i][2] === spell || list[i][3] === spell) {
            resultArray.push(list[i]);
        };
    };
    resultArray.push(resultArray.length);

    return resultArray;
};

console.log(findThirdAndFourthSpellMatchWordList(inputSpell,wordList).join("\n"));