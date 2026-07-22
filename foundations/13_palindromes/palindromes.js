const palindromes = function (aString) {
    let newString = aString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    aString=aString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('').reverse().join(''); 
    return newString==aString;
};

// Do not edit below this line
module.exports = palindromes;
