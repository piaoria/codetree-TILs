const fs = require("fs");
const [inputDay, inputHour, inputMinute] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const DATE_INFO = Object.freeze({
    DAY: 11,
    HOUR: 11,
    MINUTE: 11,
});

const calculateTime = (hour, minute) => {
    
    return hour * 60 + minute;    
};

const calculateResult = (inputDay - DATE_INFO.DAY) * 1440 + calculateTime(inputHour, inputMinute) - calculateTime(DATE_INFO.HOUR, DATE_INFO.MINUTE);

console.log(calculateResult >= 0 ? calculateResult : -1);