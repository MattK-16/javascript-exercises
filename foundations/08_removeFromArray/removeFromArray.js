const removeFromArray = function(anArray, ...values) {
    return anArray.filter(item => !values.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
