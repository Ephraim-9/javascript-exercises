const repeatString = function(string, n) {
    if  (n < 0) {
        return ("ERROR");
    }
    else {
        var result = ""
        for (let i = 0; i < n; i++) {
            result += string
        }
        return (result);    
    }
};

// Do not edit below this line
module.exports = repeatString;
