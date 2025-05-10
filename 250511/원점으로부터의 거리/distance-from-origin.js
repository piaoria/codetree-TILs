const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
const inputCoordinatesData = inputData.slice(1);

let number = 1;

class Distance {
    constructor(x, y) {
        this.x = Number(x);
        this.y = Number(y);
        this.number = Number(number++);
    }

    printCoordinateNumber() {
        console.log(this.number);
    }
}

const coordinateList = inputCoordinatesData.map((line) => {
    const [x, y] = line.split(" ");

    return new Distance(x, y);
});

const cmp = (prev, cur) => {
    const prevToOrigin = Math.abs(prev.x) + Math.abs(prev.y);
    const curToOrigin = Math.abs(cur.x) + Math.abs(cur.y);

    return prevToOrigin - curToOrigin;
};

coordinateList.sort((prev, cur) => cmp(prev, cur));

coordinateList.forEach((line) => line.printCoordinateNumber());