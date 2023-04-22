// Todo. This time no story, no theory. The examples below show you how to write function accum:

// * accum("abcd") -> "A-Bb-Ccc-Dddd"
// * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// * accum("cwAt") -> "C-Ww-Aaa-Tttt"

// ? The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arr = s.split(''),
    str = '';

  for (let i = 0; i < arr.length; i++) {
    str += '-';
    str += arr[i].toUpperCase();

    for (let n = 0; n <= i - 1; n++) {
      str += arr[i].toLowerCase();
    }
  }

  return str.slice(1);
}

console.log(accum('aBcD')); // "A-Bb-Ccc-Dddd"
accum('ZpglnRxqenU'); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
accum('NyffsGeyylB'); // "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
accum('MjtkuBovqrU'); // "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
accum('EvidjUnokmM'); // "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"
accum('HbideVbxncC'); // "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"
