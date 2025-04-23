const fs = require("fs");

const inputPersonData = fs.readFileSync(0).toString().trim().split(`\n`);

let inputGender = inputPersonData[0];
let inputAge = inputPersonData[1];

function classifyPerson(gender, age) {
    if (gender === "0") {
        return age >= 19 ? "MAN" : "BOY"
    } else {
        return age >= 19 ? "WOMAN" : "GIRL"
    };
};

console.log(classifyPerson(inputGender, inputAge));