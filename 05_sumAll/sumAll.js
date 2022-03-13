const sumAll = function (number1,number2) {
    let min = number1
    ,   max = number2;
    if(number1>number2){
        min = number2;
        max = number1;
    }
    let sum = 0;
    for (let index = min; index <= max; index++) {   
        if(index < 0){
            return 'ERROR';
        } else if (typeof number1 != 'number' || typeof number2 != 'number'){
            return 'ERROR';
        }
        sum += index;
    }
    if (Array.isArray(number1) || Array.isArray(number2)) return 'ERROR';
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
