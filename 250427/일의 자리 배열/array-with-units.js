const fs = require("fs");

const [firstNum, secondNum] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let resultArray = [];

resultArray.push(firstNum);
resultArray.push(secondNum);

function getNextNumber(a, b) {
    return (Number(a) + Number(b)) % 10;
};

for (let i = 0; i < 8; i ++) {
    resultArray.push(getNextNumber(resultArray[i], resultArray[i + 1]));
};

console.log(resultArray.join(" "));