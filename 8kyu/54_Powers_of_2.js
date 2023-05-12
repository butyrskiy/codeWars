// Todo. Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]


function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++) {
      let res = Math.pow(2, i);
      arr.push(res);
    }
    return arr;
}

console.log(powersOfTwo(0)) // [1])
console.log(powersOfTwo(1)) // [1, 2])
console.log(powersOfTwo(2)) // [1, 2, 4])
console.log(powersOfTwo(4)) // [1, 2, 4, 8, 16])