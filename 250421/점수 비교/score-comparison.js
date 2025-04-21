const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split("\n");

const inputScoreA = inputData[0].split(" ");
let mathScoreA = Number(inputScoreA[0]);
let engScoreA = Number(inputScoreA[1]);

const inputScoreB = inputData[1].split(" ");
let mathScoreB = Number(inputScoreB[0]);
let engScoreB = Number(inputScoreB[1]);

console.log(Number((mathScoreA > mathScoreB) && (engScoreA > engScoreB)));