const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function printStarMark(num) {
    
    for (let i = num; i > 0; i --) {
        let printMark = "";
        
        for (let j = i; j > 0; j --) {
            printMark += "* ";    
        };

        console.log(printMark.trim());
    };

    return;
};

printStarMark(inputNum)