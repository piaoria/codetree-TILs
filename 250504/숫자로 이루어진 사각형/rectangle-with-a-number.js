const inputNum = Number(require("fs").readFileSync(0).toString().trim());

function makeNumberSquare(intN) {
    let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numberSquare = [];

    for (let row = 0; row < intN; row ++) {
        let line = [];
        
        for (let col = 0; col < intN; col ++) {
            line.push(numberArray[((row) * intN + col) % 9]);
        }

        numberSquare.push(line);
    }

    return numberSquare;
}

makeNumberSquare(inputNum).forEach(line => console.log(line.join(" ")));