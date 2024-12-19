const sumAll = function(a,b) {
    let loopAdd = function(c,d) {
        let i = c 
        do {
             i++;
             c += i;
        } while (i < d)
            return c;
    }
    if (a > 0 && b > 0 ) {
        if (!Number.isInteger(a) || !Number.isInteger(b)) {return "ERROR"}
        else if (a < b) {
            let sum = loopAdd(a,b)
            return sum;
        }
        else {
            let sum = loopAdd(b,a)
            return sum;
        }
    }
    else {return "ERROR"}
};
let added = sumAll(1.4, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
console.log(added)

// Do not edit below this line
module.exports = sumAll;
