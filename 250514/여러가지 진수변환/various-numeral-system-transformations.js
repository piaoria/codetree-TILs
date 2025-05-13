const fs = require("fs");
const [intN, baseInt] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const convertBase4 = (num) => {
    let base4Array = [];

    while (true) {
        if (Math.trunc(num / 4) === 0) {
            base4Array.unshift(num % 4);
            break;
        }

        base4Array.unshift(num % 4);
        num = Math.trunc(num / 4);

    }

    return base4Array.join("");
};

const convertBase8 = (num) => {
    let base8Array = [];

    while (true) {
        if (Math.trunc(num / 8) === 0) {
            base8Array.unshift(num % 8);
            break;
        }

        base8Array.unshift(num % 8);
        num = Math.trunc(num / 8);

    }

    return base8Array.join("");  
};

console.log(baseInt === 4 ? convertBase4(intN) : convertBase8(intN));