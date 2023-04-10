// Todo. Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// * Example(Input => Output):
// * 35231 => [1,3,2,5,3]
// * 0 => [0]


function digitize(n) {
  const arr = String(n).split('').reverse();
  return arr.map(item => Number(item));
}

digitize(35231); // [1,3,2,5,3]
digitize(0); // [0]