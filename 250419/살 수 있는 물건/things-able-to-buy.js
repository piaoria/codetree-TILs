const fs = require("fs");

const currentMoney = Number(fs.readFileSync(0).toString().trim())

function canBuyThings(money) {
    if (money >= 3000) {
        console.log("book");
    } else if (money>=1000) {
        console.log("mask");
    } else {
        console.log("no");
    }
}

canBuyThings(currentMoney)