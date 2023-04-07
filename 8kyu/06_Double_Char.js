// Todo. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// ? Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


function doubleChar(str) {
  let newStr = '';
  for(let char of str) {
    newStr += char + char;
  }
  return newStr;
}

doubleChar('String'); // 'SSttrriinngg'
doubleChar('Hello World'); // 'HHeelllloo  WWoorrlldd'
doubleChar('1234!_ '); // '11223344!!__  '