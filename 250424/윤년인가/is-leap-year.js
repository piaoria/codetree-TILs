const inputYear = parseInt(require("fs").readFileSync(0).toString().trim(), 10);

function isLeapYear(year) {
    return year % 4 === 0 ? (year % 100 === 0) && (year % 400 !== 0) ? "false" : "true" : "false";
};

console.log(isLeapYear(inputYear));