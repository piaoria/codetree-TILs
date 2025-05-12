const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const intN = Number(input[0]);
const inputStudentList = input.slice(1);
let num = 1;

class Student {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
        this.num = num ++;
    }
    
    printStudentInfo() {
        console.log(this.height, this.weight, this.num);
    }
}

const studentList = inputStudentList.map((line) => {
    const [height, weight] = line.split(" ").map(Number);

    return new Student(height, weight);
});

const cmp = (prev, cur) => {
    if (prev.height !== cur.height) return prev.height - cur.height;

    return cur.weight - prev.weight;
};

studentList.sort((prev, cur) => cmp(prev, cur));

studentList.forEach((line) => line.printStudentInfo());