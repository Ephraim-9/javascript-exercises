const removeFromArray = (first, ...rest) => 
    first.filter(item => !rest.includes(item))
console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;