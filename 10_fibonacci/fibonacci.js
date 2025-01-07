const fibonacci = function(n) {
    if (n === 0) {return 0;}
    else if (n === 1) {return 1;}
    else {
        let arr = [];

        function fib(n) {
            if (n < 0) {
                return "OOPS";
            }
            else {
                return fib(n - 1) + fib(n - 2);
            }
        }
                
        for (let i = 0; i < n ; i++) {
            arr.push(fib(i));
        }
        return arr[n - 1];
    }
};


let four = fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
console.log(four)

//( F(0) = 0 )
//( F(1) = 1 )
//( F(n) = F(n-1) + F(n-2) ) for ( n > 1 )




// Do not edit below this line
module.exports = fibonacci;
