const arrayA = [3,1,4,5,9];

function addIndexvalue(array) {
    let result = 0;
    result = array[1] + array[3] + array[4];
    return result;
};

console.log(addIndexvalue(arrayA));