const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const repeatNum = Number(input[0]);

const printRepeatString = (repeatCnt) => {
    if (!repeatCnt) return;
    
    console.log("HelloWorld");
    printRepeatString(repeatCnt -1);
};

printRepeatString(repeatNum);