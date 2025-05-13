const fs = require("fs");
const [intN, baseInt] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const convertBase = (num, target) => {
    let baseTargetArray = [];

    while (true) {
        if (Math.trunc(num / target) === 0) {
            baseTargetArray.unshift(num % target);
            break;
        }

        baseTargetArray.unshift(num % target);
        num = Math.trunc(num / target);

    }

    return baseTargetArray.join("");
};

console.log(convertBase(intN, baseInt));