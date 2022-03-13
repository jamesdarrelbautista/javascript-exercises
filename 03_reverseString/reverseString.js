const reverseString = function(text) {
    let reverse = '';
    let array = text.split("");
    for (let index = array.length; index => 0; index--) {
        reverse += array[index];
    }
    return console.log(reverse);
};

// Do not edit below this line
module.exports = reverseString;
