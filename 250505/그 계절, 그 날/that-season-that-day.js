const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [inputYear, inputMonth, inputDay] = input[0].split(" ").map(Number);

const commonCalendar = {
    1 : [31, "Winter"],
    2 : [28, "Winter"],
    3 : [31, "Spring"],
    4 : [30, "Spring"],
    5 : [31, "Spring"],
    6 : [30, "Summer"],
    7 : [31, "Summer"],
    8 : [31, "Summer"],
    9 : [30, "Fall"],
    10 : [31, "Fall"],
    11 : [30, "Fall"],
    12 : [31, "Winter"]
}

const leapCalendar = {
    1 : [31, "Winter"],
    2 : [29, "Winter"],
    3 : [31, "Spring"],
    4 : [30, "Spring"],
    5 : [31, "Spring"],
    6 : [30, "Summer"],
    7 : [31, "Summer"],
    8 : [31, "Summer"],
    9 : [30, "Fall"],
    10 : [31, "Fall"],
    11 : [30, "Fall"],
    12 : [31, "Winter"]
}

const isLeapCalendar = (year) => {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            }

            return false;
        }

        return true;
    }

    return false;
};

const printSeason = (isLeap, month, day) => {
    if (isLeap) {
        return leapCalendar[month][0] < day ? -1 : leapCalendar[month][1]
    } else {
        return commonCalendar[month][0] < day ? -1 : commonCalendar[month][1]
    }
};

console.log(printSeason(isLeapCalendar(inputYear), inputMonth, inputDay));