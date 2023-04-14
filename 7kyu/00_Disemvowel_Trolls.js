// Todo. Trolls are attacking your comment section!
// Todo. A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// ? Your task is to write a function that takes a string and return a new string with all vowels removed.
// ? For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// ? Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  const vowel = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  let res = '';

  for (let char of str) {
    if (!vowel.includes(char)) {
      res += char;
    }
  }
  return res;
}

disemvowel('This website is for losers LOL!'); // "Ths wbst s fr lsrs LL!"
// disemvowel("No offense but,\nYour writing is among the worst I've ever read"); // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
// disemvowel('What are you, a communist?'); // "Wht r y,  cmmnst?"

// Todo. Other sulution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
