const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = Number(arr[0]);
let m = Number(arr[1]);

function printRepeatDivideResult(initValue, divideValue) {
    let value = initValue;
    
    while (value !== 0) {
        console.log(value);
        value = Math.floor(value/divideValue);
    };

};

printRepeatDivideResult(n, m);