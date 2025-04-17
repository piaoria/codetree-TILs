const fs = require("fs")

const input_data = fs.readFileSync(0).toString().trim().split(" ");

function sum (arr) {
    let num = 0;
    for (i = 0; i < arr.length; i ++) {
        num += Number(arr[i])
    }
    return num;
}

function avg (arr) {
    return (sum(arr) / arr.length).toFixed(0)
}

console.log(sum(input_data))
console.log(avg(input_data))
console.log(sum(input_data) - avg(input_data))