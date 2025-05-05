const fs = require("fs");
const inputStr = fs.readFileSync(0).toString().trim();

const reverseString = (word) => {
    return word.split("").reverse().join("");

};

console.log(inputStr === reverseString(inputStr) ? "Yes" : "No");