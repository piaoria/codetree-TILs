const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const inputProfileData = input.slice(1);

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

const profileList = inputProfileData.map((line) => {
    const [name, height, weight] = line.split(" ");

    return new Profile(name, height, weight);
});

const cmp = (prev, cur) => {
    if (prev.height !== cur.height) return prev.height - cur.height;
    
    return cur.weight - prev.weight;
};

profileList.sort((prev, cur) => cmp(prev, cur));

profileList.forEach((line) => line.printProfileInfo());