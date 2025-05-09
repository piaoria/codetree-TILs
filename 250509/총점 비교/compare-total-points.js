const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const inputStudentsInfo = inputData.slice(1);

class StudentGrade {
    constructor(name, score1, score2, score3) {
        this.name = name;
        this.score1 = Number(score1);
        this.score2 = Number(score2);
        this.score3 = Number(score3);
    }

    getSumGrade() {
        return this.score1 + this.score2 + this.score3;
    }

    printStudentInfo() {
        console.log(this.name, this.score1, this.score2, this.score3);
    }
}

const studentsGradeList = inputStudentsInfo.map((line) => {
    const [name, score1, score2, score3] = line.split(" ")

    return new StudentGrade(name, score1, score2, score3);
});


studentsGradeList.sort((prev, cur) => prev.getSumGrade() - cur.getSumGrade());

studentsGradeList.forEach((line) => line.printStudentInfo());