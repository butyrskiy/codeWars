// Todo. Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // 'ehT kciuq nworb xof spmuj revo eht yzal .god'
reverseWords('apple'); // 'elppa'
reverseWords('a b c d'); // 'a b c d'
reverseWords('double  spaced  words'); // 'elbuod  decaps  sdrow'
