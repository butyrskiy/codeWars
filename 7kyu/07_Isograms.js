// Todo. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  let a = true;
  str
    .toLowerCase()
    .split('')
    .forEach((el, i, arr) => {
      arr.indexOf(el) !== i ? (a = false) : a;
    });
  return a;
}

isIsogram('Dermatoglyphics'); // true
isIsogram('aba'); // false, "same chars may not be adjacent"
isIsogram('isogram'); // true
isIsogram('moOse'); // false, "same chars may not be same case"
isIsogram('isIsogram'); // false
isIsogram(''); // true, "an empty string is a valid isogram"

// Todo. Solution of codeWars member
function isIsogram2(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
