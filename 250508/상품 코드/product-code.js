const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

class Product {
    constructor(name, code) {
        this.name = name;
        this.code = Number(code);
    }
    printProductInfo() {
        console.log(`product ${this.code} is ${this.name}`);
    }
}

const product1 = new Product("codetree", "50");
const product2 = new Product(...inputData);

product1.printProductInfo();
product2.printProductInfo();