// Todo. Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// ? Note: a and b are not ordered!

function getSum(a, b) {
   if(a === b) return a;
   let arr = [];

   if(a < b) {
    for(let i = a; i <= b; i++) {
        arr.push(i);
    }
   } else if(a > b) {
    for(let i = a; i >= b; i--) {
        arr.push(i);
    }
   }
   return arr.reduce((acc, num) => acc + num);
}

getSum(0, -1); // -1
getSum(0, 1); // 1
getSum(2, 2); // 2