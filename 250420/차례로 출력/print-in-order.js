function printFiveToSeventeen () {
    let result = "";

    for (i = 5; i < 18; i ++) {
        result += `${i} `;
    }

    result.trimEnd();

    return result;
}

console.log(printFiveToSeventeen());