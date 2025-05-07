const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
const agentList = [];

class Agent {
    constructor(name, score) {
        this.name = name;
        this.score = Number(score);
    }
}

for (let i = 0; i < 5; i ++) {
    agentList.push(new Agent(...(inputData[i].split(" "))));
}

const lowerScoreAgent = agentList.sort((prev, cur) => prev.score - cur.score)[0];

console.log(lowerScoreAgent.name, lowerScoreAgent.score);