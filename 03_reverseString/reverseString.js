const reverseString = function(string) {
    const strArray = string.split('');
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        newString += strArray.pop();
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
