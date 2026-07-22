const fibonacci = function(index) {
    index = Number(index);
    if (index < 0){
        return "OOPS";
    }
    
    if (index === 0) { 
        return 0;
    }

    let prev = 0;
    let current = 1;
    
    for (let i = 2; i <= index; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }
    
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
