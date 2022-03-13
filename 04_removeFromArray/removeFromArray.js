const removeFromArray = function (array, ...number) {
    for (let index = 0; index < number.length; index++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == number[index] && typeof array[j] == typeof number[index]){
                array.splice(j, 1);   
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
