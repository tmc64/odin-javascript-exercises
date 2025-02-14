const palindromes = function (string) {
    let lowerString = string.toLowerCase()
    const lowerArray = lowerString.split("")
    let allowedCharacters = "1234567890qwertyuiopasdfghjklzxcvbnm"
    const allowedArray = allowedCharacters.split("")
    
    const filteredArray = lowerArray.filter(function(validChars) {
        return allowedArray.includes(validChars)
    })

    let originalString = ""
    for (const i of filteredArray) {
        originalString += i
    }

    filteredArray.reverse()

    let reversedString = ""
    for (const i of filteredArray) {
        reversedString += i
    }

    return originalString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
