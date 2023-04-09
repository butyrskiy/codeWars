// Todo. Complete the square sum function so that it squares each number passed into it and then sums the results together.

// ? For example, for [1, 2, 2] it should return 9 because


function squareSum(numbers){
  let res = 0;

  numbers.forEach(num => {
    res += num * num;
  });
  return res;
}

squareSum([1,2]); // 5
squareSum([0, 3, 4, 5]); // 50
squareSum([]); // 0


// Todo. Solution #2

function squareSum2(numbers){
  return numbers.reduce((sum, num) => sum + (num * num), 0);
}

squareSum2([1,2]); // 5
squareSum2([0, 3, 4, 5]); // 50
squareSum2([]); // 0