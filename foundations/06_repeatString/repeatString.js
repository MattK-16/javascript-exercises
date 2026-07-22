const repeatString = function(aString, num) {
    let rString = '';
    if (num <0){
        rString="ERROR";
    }
    else {
        for (let i = num; i > 0; i--){
            rString = rString + aString
        }
    }
    return rString
};

// Do not edit below this line
module.exports = repeatString;
