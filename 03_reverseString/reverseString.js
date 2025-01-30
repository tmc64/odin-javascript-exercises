const reverseString = function(string) {
    let reversedString = ""
    const stringArray = string.split("")
    stringArray.reverse()
    for (const i of stringArray) {
        reversedString += i
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
