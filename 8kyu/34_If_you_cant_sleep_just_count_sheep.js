// Todo. Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
  let res = `${num} sheep...`
  if(num === 0) return '';
  if(num === 1) return res;

  return countSheep(num - 1) + res;
}

// countSheep(0); ""
// countSheep(1); "1 sheep..."
// countSheep(2); "1 sheep...2 sheep..."
console.log(countSheep(5)); "1 sheep...2 sheep...3 sheep..."