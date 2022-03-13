const reverseString = function(text) {
    let reverse = '';
    let array = text.split("");
    for (let index = 1; index <= array.length; index++) {
        reverse += array[array.length - index];
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
