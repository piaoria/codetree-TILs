const fs = require("fs");
const [beginMonth, beginDay, finishMonth, finishDay] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const dateList = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculateDays = (month, day) => {
    let days = 0;

    for (let mon = 1; mon < month; mon ++) {
        days += dateList[mon];
    }
    days += day

    return days;
};

console.log(calculateDays(finishMonth, finishDay) - calculateDays(beginMonth, beginDay) + 1);