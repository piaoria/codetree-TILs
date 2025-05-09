const fs = require("fs");
const inputProfileData = fs.readFileSync(0).toString().trim().split("\n");

class Profile {
    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight);
    }

    printProfileInfo() {
        console.log(this.name, this.height, (Math.floor(this.weight* 10) / 10).toFixed(1));
    }
}

const profileList = inputProfileData.map((data) => {
    const [name, height, weight] = data.split(" ");

    return new Profile(name, height, weight);
});

const cmpHeight = (prev, cur) => {
    return cur.height - prev.height;
};

const sortedNameList = [...profileList].sort((prev, cur) => prev.name.localeCompare(cur.name));
const sortedHeightList = [...profileList].sort((prev, cur) => cmpHeight(prev, cur));
console.log("name");
sortedNameList.forEach((info) => info.printProfileInfo());

console.log("");
console.log("height");
sortedHeightList.forEach((info) => info.printProfileInfo());