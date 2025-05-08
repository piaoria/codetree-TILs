const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');

const intN = Number(inputData[0]);
const inputDaysData = inputData.slice(1);

class Day {
    constructor(date, weekday, weather) {
        this.date = date;
        this.weekday = weekday;
        this.weather = weather;
    }

    printDayInfo() {
        console.log(this.date, this.weekday, this.weather);
    }
}

const daysList = [];

for (let day of inputDaysData) {
    daysList.push(new Day(...day.split(" ")));
}

daysList.filter((cur) => cur.weather === "Rain").sort((prev, cur) => prev.date.localeCompare(cur.date))[0].printDayInfo();