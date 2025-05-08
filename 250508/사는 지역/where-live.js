const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');

const intN = Number(inputData[0]);
const personLines = inputData.slice(1, intN + 1);

class Person {
    constructor(name, addr, city) {
        this.name = name;
        this.addr = addr;
        this.city = city;
    }

    printPersonInfo() {
        console.log(`name ${this.name}`);
        console.log(`addr ${this.addr}`);
        console.log(`city ${this.city}`);
    }
}

const personList = [];
for (let person of personLines) {
    personList.push(new Person(...person.split(" ")));
}

personList.sort((prev, cur) => prev.name.localeCompare(cur.name))[intN - 1].printPersonInfo();