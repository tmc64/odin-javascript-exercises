const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR"
    } else if (x < y) {
        let sum = 0
        for (let i = x; x <= y; x++) {
            sum += x
        }
        return sum
    } else {
        let sum = 0
        for (let i = x; x >= y; x--) {
            sum += x
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
