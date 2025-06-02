const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

// 학생 번호 1~N
// 벌칙 번호 M번
// 커트라인 K
const [intN, intM, intK] = inputData[0].split(" ").map(Number);
const inputPenaltyStudentList = inputData.slice(1).map(Number);

const studentList = new Array(intN + 1).fill(0);

const printPenaltyStudent = () => {
    for (let penalty of inputPenaltyStudentList) {
        studentList[penalty] ++;

        if (Math.max(...studentList) === intK) {
            return console.log(studentList.indexOf(intK));
        }
    }
    return console.log(-1);
};

printPenaltyStudent();