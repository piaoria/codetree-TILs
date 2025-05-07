const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

class Secret {
    constructor(secrectCode, meetingPoint, time) {
        this.secrectCode = secrectCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }
}

const newSecret = new Secret(...inputData);

console.log(`secret code : ${newSecret.secrectCode}`);
console.log(`meeting point : ${newSecret.meetingPoint}`);
console.log(`time : ${newSecret.time}`);