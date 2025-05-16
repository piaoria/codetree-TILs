const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0])
const inputCmdList = inputData.slice(1).map((line) => line.split(" "));

const visitedColorArray = new Array(intN * 100 * 2 + 1).fill("");

// 문자열로 합쳐 둔 다음 W,B 갯수 확인 후 최종 색 확인.
const fillColor = (cmdList) => {
    let position = intN * 100;

    for (let cmd of cmdList) {
        let leng = Number(cmd[0]);
        let direction = cmd[1];

        if (direction === "L") {
            for (let i = position - 1; i >= position - leng; i --) {
                visitedColorArray[i] = "W" + visitedColorArray[i];
            }
            position = position - leng;

        } else if (direction === "R") {
            for (let j = position; j < position + leng; j ++) {
                visitedColorArray[j] = "B" + visitedColorArray[j];
            }
            position = position + leng;
        }
    }
};

fillColor(inputCmdList);

const countColor = (colorArray) => {
    let white = 0;
    let black = 0;
    let gray = 0;

    for (let idx = 0; idx < colorArray.length; idx ++) {
        let color = colorArray[idx];

        if (color !== "") {
            let wh = 0;
            let bl = 0;

            for (let cl of color) {
                if (cl === "W") {
                    wh ++;
                } else if (cl === "B") {
                    bl ++;
                }
            }

            if (wh >= 2 && bl >= 2) {
                gray ++;
            } else if (color[0] === "W") {
                white ++;
            } else if (color[0] === "B") {
                black ++;
            }

        }

    }

    return [white, black, gray];
};

console.log(...countColor(visitedColorArray));