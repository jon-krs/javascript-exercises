const removeFromArray = function(array, ...toRemoveArgs) {
    for (const arg of toRemoveArgs) {
        let index = array.indexOf(arg);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
