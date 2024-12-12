const reverseString = function(str) {
    var arr = Array.from(str)
    var revarr = []
    
    for (var i = arr.length - 1; i >= 0; i--) {
        revarr.push(arr[i])
    }
    var revstr = revarr.join("")
    return(revstr)
};
// Do not edit below this line
module.exports = reverseString;
