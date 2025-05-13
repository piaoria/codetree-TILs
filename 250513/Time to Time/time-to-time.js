const fs = require("fs");
const [intA, intB, intC, intD] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const calculateTimeTerm = (befo, aft) => {
    return aft - befo;
};

console.log(calculateTimeTerm(intA * 60 + intB, intC * 60 + intD));