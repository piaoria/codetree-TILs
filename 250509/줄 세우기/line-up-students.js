const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(input[0]);
const inputStudentsData = input.slice(1);
let number = 1;

class Student {
    constructor(height, weight, number) {
        this.height = Number(height);
        this.weight = Number(weight);
        this.number = Number(number);
    }

    printStudentInfo() {
        console.log(this.height, this.weight, this.number);
    }
}

const studentList = inputStudentsData.map((info) => {
    const [h, w] = info.split(" ");

    return new Student(h, w, number++);
});

const cmp = (prev, cur) => {
    if (prev.height !== cur.height) return cur.height - prev.height;
    
    if (prev.weight !== cur.weight) return cur.weight - prev.weight;

    return prev.number - cur.number
};

studentList.sort((prev, cur) => cmp(prev, cur));

studentList.forEach((student) => student.printStudentInfo());