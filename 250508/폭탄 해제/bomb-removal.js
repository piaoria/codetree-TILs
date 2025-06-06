const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

class Bomb {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = Number(second);
    }

    bombInfoPrint() {
        console.log(`code : ${newBomb.code}`);
        console.log(`color : ${newBomb.color}`);
        console.log(`second : ${newBomb.second}`);
    }
}

const newBomb = new Bomb(...inputData);

newBomb.bombInfoPrint();