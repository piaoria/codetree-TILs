const fs = require("fs");

const [firstWord, secondWord] = fs.readFileSync(0).toString().trim().split(" ");

function getMoreLengthWord(wordA, wordB) {

    let wordLengthA = wordA.length;
    let wordLengthB = wordB.length;

    if (wordLengthA === wordLengthB) {
        return "same";
    } else if (wordLengthA > wordLengthB) {
        return [wordA, wordLengthA].join(" ");
    } else {
        return [wordB, wordLengthB].join(" ");
    };
};

console.log(getMoreLengthWord(firstWord, secondWord));