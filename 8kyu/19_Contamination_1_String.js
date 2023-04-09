// Todo. An AI has infected a text with a character!!
// ? This text is now fully mutated to this character
// ? If the text or the character are empty, return an empty string.
// ? There will never be a case when both are empty as nothing is going on!!

// ? Note: The character is a string of length 1 or an empty string.

// * Example
// * text before = "abc"
// * character   = "z"
// * text after  = "zzz"


function contamination(text, char){
  if (text === '' || char === '') return '';

  let newText = '';
  for(let item of text) {
    item = char;
    newText += item;
  }
  return newText;
}

contamination("abc","z"); // "zzz"
contamination("","z"); // ""
contamination("abc",""); // ""
contamination("_3ebzgh4","&"); // "&&&&&&&&"
contamination("//case"," "); // "      "