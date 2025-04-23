const fs = require("fs");

const inputPersonData = fs.readFileSync(0).toString().trim().split(`\n`);

let inputGender = inputPersonData[0];
let inputAge = inputPersonData[1];

function classifyPerson(gender, age) {
    if (gender === "0") {
        if (age >= 19) {
            return "MAN"
        } else {
            return "BOY"
        };
    } else {
        if (age >= 19) {
            return "WOMAN"
        } else {
            return "GIRL"
        };
    };
};

console.log(classifyPerson(inputGender, inputAge));