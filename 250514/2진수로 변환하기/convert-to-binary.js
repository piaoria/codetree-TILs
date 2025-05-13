let intN = Number(require("fs").readFileSync(0).toString().trim());

const binaryArray = [];

while (true) {
    if (Math.trunc(intN / 2) === 0) {
        binaryArray.unshift(intN % 2);
        break;
    }

    binaryArray.unshift(intN % 2);
    intN = Math.trunc(intN / 2);
}

console.log(binaryArray.join(""));