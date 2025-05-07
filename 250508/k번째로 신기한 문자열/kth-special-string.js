const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
let idx = 0;
const [strN, strK, strT] = inputData[idx ++].split(" ");

const wordList = [];
for (let i = 0; i < Number(strN); i ++) {
    wordList.push(inputData[idx ++]);
}

const makeMatchingWordList = (array, keyword) => {
    return array.filter(word => word.startsWith(keyword));
};

console.log(makeMatchingWordList(wordList, strT).sort()[Number(strK) - 1]);