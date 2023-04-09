// Todo. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// ? The correct answer would be 17.
// ? Hint: Don't forget to check for bad values like null/undefined


const array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

function countSheeps(arrayOfSheep) {
  let sum = 0;

  array1.forEach(item => {
    if(item === true) {
      item = 1;
    } else if (item === false) {
      item = 0;
    } else if(item === null || item === undefined) {
      item = 0;
    }
    sum += item;
  });
  return sum;
}

countSheeps(array1); // 17