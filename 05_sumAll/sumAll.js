const sumAll = function(startNum, endNum) {
    let sumResult = 0;
    if (startNum < 0 || endNum < 0 || typeof startNum !== 'number' || typeof endNum !== 'number') {
        return 'ERROR'
    }
    else if (endNum >= startNum) {
        for (let i = startNum; i <= endNum; i++) {
            sumResult += i;
        }
    }
    else {
        for (let i = endNum; i <= startNum; i++) {
            sumResult += i;
        }
    }
    return sumResult;
};

// Do not edit below this line
module.exports = sumAll;
