const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);

const printArithmeticOperations = (a, o, c) => {
    if (o === "+") {
        console.log(`${a} ${o} ${c} = ${a + c}`)
        
    } else if (o === "-") {
        console.log(`${a} ${o} ${c} = ${a - c}`)

    } else if (o === "/") {
        console.log(`${a} ${o} ${c} = ${Math.trunc(a / c)}`)
        
    } else if (o === "*") {
        console.log(`${a} ${o} ${c} = ${a * c}`)
        
    } else {
        console.log("False");

    }

    return;
}

printArithmeticOperations(a, o, c);