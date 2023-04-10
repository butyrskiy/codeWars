// Todo. Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// ? The output should be two capital letters with a dot separating them.
// ? It should look like this:

// * Sam Harris => S.H
// * patrick feeney => P.F


function abbrevName(name){

  const strInArr = [...name];
  let firstLetter = strInArr[0].toUpperCase();
  let secondLetter;

  for(let i = 0; i < name.length; i++) {
    if(name[i] === ' ') {
      secondLetter = name[i + 1].toUpperCase();
    }
  }
  return `${firstLetter}.${secondLetter}`;
}

abbrevName("Sam Harris"); // "S.H"
abbrevName("Patrick Feenan"); // "P.F"
abbrevName("Evan Cole"); // "E.C"
abbrevName("P Favuzzi"); // "P.F"
abbrevName("david mendieta"); // "D.M"



// Todo. Solution #2 (codeWars) 

function abbrevName2(name){
  var nameArray = name.split(' ');
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

abbrevName2("Sam Harris"); // "S.H"
abbrevName2("Patrick Feenan"); // "P.F"
abbrevName2("Evan Cole"); // "E.C"
abbrevName2("P Favuzzi"); // "P.F"
abbrevName2("david mendieta"); // "D.M"