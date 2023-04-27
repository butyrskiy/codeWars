// Todo. Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  const newStr = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let char of newStr) {
    if (char === 'x') {
      countX++;
    } else if (char === 'o') {
      countO++;
    }
  }
  return countX === countO ? true : false;
}

XO('xo'); // true
XO('xxxm'); // false
XO('xxOo'); // true
XO('Oo'); // false
XO('ooom'); // false
XO('zpzpzpp'); // true
