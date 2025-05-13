const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const [inputInitMonth, inputInitDay, inputTargetMonth, inputTargetDay] = inputData[0].split(" ").map(Number);
const targetDay = inputData[1];

const daysOfMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayOfWeekNum = [0, 1, 2, 3, 4, 5, 6];
const dayIndex = dayOfWeek.indexOf(targetDay);

const calculateGapDays = (initMonth, initDay, targetMonth, targetDay) => {
    const initDaysCnt = daysOfMonth.slice(1, initMonth).reduce((acc, val) => acc + val, 0) + initDay;
    const targetDaysCnt = daysOfMonth.slice(1, targetMonth).reduce((acc, val) => acc + val, 0) + targetDay;

    return targetDaysCnt - initDaysCnt;
};

const weekCnt = calculateGapDays(inputInitMonth, inputInitDay, inputTargetMonth, inputTargetDay);

console.log(Math.trunc(weekCnt / 7) + (dayOfWeekNum[weekCnt % 7] >= dayIndex ? 1 : 0));