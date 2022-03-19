const fibonacci = function(number) {
    if(number < 0) return "OOPS";
    else if(typeof number == "string") parseInt(number);
    
    num1 = 0,num2 = 1, next_term = 0;
    for (let index = 0; index < number; index++) {
        if (index <= 1) next_term = 1;
        next_term = num1 + num2 ;
        num1 = num2;
        num2 = next_term;
    }
    return num1;
};

// Do not edit below this line
module.exports = fibonacci;
