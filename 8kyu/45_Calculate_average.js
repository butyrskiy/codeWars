// Todo. Write a function which calculates the average of the numbers in a given list.

// ? Note: Empty arrays should return 0.


function findAverage(array) {
  if(array.length === 0) return 0;

  let sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  const res = sum / array.length;
  return res;
}

findAverage([1,1,1]); //  1
findAverage([1,2,3]); //  2
findAverage([1,2,3,4]); //  2.5
findAverage([]); // 0