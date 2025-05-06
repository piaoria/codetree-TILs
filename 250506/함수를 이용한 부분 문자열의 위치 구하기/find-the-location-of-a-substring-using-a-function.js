const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0].split("");
const pattern = input[1].split("");

const findMatchingStringIndex = () => {
    let result = -1;

    for (let txtIdx = 0; txtIdx < text.length; txtIdx ++) {

        if (text[txtIdx] === pattern[0]) {
            let judge = true;

            for (let ptnIdx = 0; ptnIdx < pattern.length; ptnIdx ++) {

                if (text[txtIdx + ptnIdx] === pattern[ptnIdx]) {

                    continue;
                } else {

                    judge = false;
                    break;
                }

            }

            if (judge) {
                result = txtIdx;
                break;
            }
            
        }
    }

    return result;
};

console.log(findMatchingStringIndex())