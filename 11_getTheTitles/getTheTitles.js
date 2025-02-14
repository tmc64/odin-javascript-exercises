const getTheTitles = function(array) {
    const filteredArray = array.map(function(book) {
        return book.title
    }) 
    return filteredArray
};

// Do not edit below this line
module.exports = getTheTitles;
