const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [inputMonth, inputDay] = input[0].split(" ").map(Number);

const calendar = {
    1 : 31,
    2 : 28,
    3 : 31,
    4 : 30,
    5 : 31,
    6 : 30,
    7 : 31,
    8 : 31,
    9 : 30,
    10 : 31,
    11 : 30,
    12 : 31
}

const isCalendar2021 = (month, day) => {
    return calendar[month] >= day ? "Yes" : "No";
};

console.log(isCalendar2021(inputMonth, inputDay));