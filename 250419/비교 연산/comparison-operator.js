const fs = require("fs");

const input_data = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(input_data[0])
let b = Number(input_data[1])

function judge(num_1, num_2) {
    console.log(num_1>=num_2 ? 1 : 0)
    console.log(num_1>num_2 ? 1 : 0)
    console.log(num_1<=num_2 ? 1 : 0)
    console.log(num_1<num_2 ? 1 : 0)
    console.log(num_1===num_2 ? 1 : 0)
    console.log(num_1!==num_2 ? 1 : 0)
}

judge(a, b)