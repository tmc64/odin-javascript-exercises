const fibonacci = function(x) {
    if (x < 0) {
        return "OOPS"
    } else if (x == 0) {
        return 0
    } else {
        let currentNumber = 1
        let lastNumber = 0
        for (i = 1; i < x; i++) {
            let newNumber = currentNumber + lastNumber
            lastNumber = currentNumber
            currentNumber = newNumber        
        }
        return currentNumber
    }
}
// Do not edit below this line
module.exports = fibonacci;
