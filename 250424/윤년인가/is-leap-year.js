const inputYear = parseInt(require("fs").readFileSync(0).toString().trim(), 10);

function isLeapYear(year) {
    if (year % 4 === 0) {
        if ((year % 100 === 0) && (year % 400 !== 0)) {
            return "false";
        };
        return "true";
    };
    return "false";
};

console.log(isLeapYear(inputYear));