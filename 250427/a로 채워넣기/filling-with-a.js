const fs = require("fs");

let inputWord = fs.readFileSync(0).toString().trim();

function replaceSpellSecondIndex (word, replaceSpell = "a") {
    return word.slice(0, 1) + replaceSpell + word.slice(2, word.length + 1);
};

function replaceSpellLastSecondIndex (word, replaceSpell = "a") {
    return word.slice(0, word.length-2) + replaceSpell + word.slice(word.length - 1, word.length);
};

let replacedSpellSecondIndex = replaceSpellSecondIndex(inputWord);
let replacedSpellSecondAndLastSecondIndex = replaceSpellLastSecondIndex(replacedSpellSecondIndex);

console.log(replacedSpellSecondAndLastSecondIndex)