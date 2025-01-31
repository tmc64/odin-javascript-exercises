const removeFromArray = function (array, ...args) {
    let newArray = array.filter(function(a) {
        return !args.includes(a)
    }) 
    return newArray
}

// Do not edit below this line
module.exports = removeFromArray;
