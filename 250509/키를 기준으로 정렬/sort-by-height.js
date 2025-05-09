const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
const intN = Number(inputData[0]);
const inputProfileList = inputData.slice(1);

class Profile {
    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight);
    }

    printProfileInfo() {
        console.log(this.name, this.height, this.weight);
    }
}

const profileList = [];

for (let info of inputProfileList) {
    profileList.push(new Profile(...info.split(" ")));
}

profileList.sort((prev, cur) => prev.height - cur.height).forEach((cur) => cur.printProfileInfo());