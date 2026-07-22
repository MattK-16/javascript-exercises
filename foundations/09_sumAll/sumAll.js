const sumAll = function(one, two) {
    if (Number.isInteger(one) && Number.isInteger(two) && one>=0 && two>=0) {
        let num= 0;
        let counter = two-one+1;
        if (one>=two){
            counter = one-two+1;
            for (let i = counter; i > 0; i--) {
            num+=two;
            two++;
        }
        return num;
        }
        for (let i = counter; i > 0; i--) {
            num+=one;
            one++;
        }
        return num;
    } 
    
    else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
