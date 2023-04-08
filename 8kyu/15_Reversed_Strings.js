// Todo. Complete the solution so that it reverses the string passed into it.

// * 'world'  =>  'dlrow'
// * 'word'   =>  'drow'


function solution(str){
  let newStr = str.split('').reverse().join('');
  return newStr;
}

solution('world'); // 'dlrow'
solution('word'); // 'drow'