const fs = require("fs");
const inputWord = fs.readFileSync(0).toString().trim();

const isDuplicateSpell = (initSpell, spellArray) => {
    for (let spell of spellArray) {
        if (spell === initSpell) {
            continue;
        }

        return true;
    }

    return false;
};

console.log(isDuplicateSpell(inputWord[0], inputWord) ? "Yes" : "No");