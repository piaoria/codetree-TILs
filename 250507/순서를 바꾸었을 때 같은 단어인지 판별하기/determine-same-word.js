const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

const isEqualityWord = (wordA, wordB) => {
    if (wordA.length !== wordB.length) return false;
    
    const wordAList = wordA.split("").sort();
    const wordBList = wordB.split("").sort();
    const wordLength = wordA.length;

    let result = true;

    for (let idx = 0; idx < wordLength; idx ++) {
        if (wordAList[idx] !== wordBList[idx]) {
            result = false;
            break;
        }
    }

    return result;
};

console.log(isEqualityWord(str1, str2) ? "Yes" : "No");