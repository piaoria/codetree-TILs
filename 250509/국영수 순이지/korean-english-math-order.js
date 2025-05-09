const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const intN = inputData[0];
const inputGradesInfo = inputData.slice(1);

class Grade {
    constructor(name, language, english, mathematics) {
        this.name = name;
        this.language = Number(language);
        this.english = Number(english);
        this.mathematics = Number(mathematics);
    }

    printGradeInfo() {
        console.log(this.name, this.language, this.english, this.mathematics);
    }
}

const gradesList = inputGradesInfo.map((line) => {
    const [name, language, english, mathematics] = line.split(" ");

    return new Grade(name, language, english, mathematics);
});

const sortGradesInfo = (prev, cur) => {
    if (prev.language !== cur.language) return cur.language - prev.language;
    if (prev.english !== cur.english) return cur.english - prev.english;
    return cur.mathematics - prev.mathematics;
};

gradesList.sort((prev, cur) => sortGradesInfo(prev, cur));

gradesList.forEach((line) => line.printGradeInfo());