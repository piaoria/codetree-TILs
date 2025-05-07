const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

class UserInfo {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}

const userInfo1 = new UserInfo("codetree", "10");
const userInfo2 = new UserInfo(...inputData);

console.log(`user ${userInfo1.id} lv ${userInfo1.level}`)
console.log(`user ${userInfo2.id} lv ${userInfo2.level}`)