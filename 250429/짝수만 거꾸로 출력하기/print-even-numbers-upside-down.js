const fs = require("fs");

const [inputInt, inputArray] = fs.readFileSync(0).toString().trim().split("\n");

let numberList = inputArray.split(" ").map(Number);

function getEvenNumber(num) {
    return num % 2 == 0;
};

console.log(numberList.filter(getEvenNumber).reverse().join(" "));