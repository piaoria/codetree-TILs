const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

class UserInfo {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
    
    printUserInfo(){
        console.log(`user ${this.id} lv ${this.level}`);
    }

}

const userInfo1 = new UserInfo("codetree", "10");
const userInfo2 = new UserInfo(...inputData);

userInfo1.printUserInfo()
userInfo2.printUserInfo()