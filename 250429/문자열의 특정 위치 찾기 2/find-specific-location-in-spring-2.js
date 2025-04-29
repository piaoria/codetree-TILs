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

    return resultArray;
};

const result = findThirdAndFourthSpellMatchWordList(inputSpell,wordList);

console.log(result.join("\n"));
console.log(result.length);