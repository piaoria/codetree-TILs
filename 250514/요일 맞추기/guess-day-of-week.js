const fs = require("fs");
const [inputBeginMonth, inputBeginDay, inputFinishMonth, inputFinishDay] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const daysOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const calculateDayGap = (beginMonth, beginDay, finishMonth, finishDay) => {
    const beginDateTime = daysOfMonth.slice(1, beginMonth).reduce((acc, val) => acc + val, 0) + beginDay;
    const finishDateTime = daysOfMonth.slice(1, finishMonth).reduce((acc, val) => acc + val, 0) + finishDay;
    
    return finishDateTime - beginDateTime;
};

const result = calculateDayGap(inputBeginMonth, inputBeginDay, inputFinishMonth, inputFinishDay) % 7;

console.log(dayOfWeek[result >= 0 ? result : result + 7]);