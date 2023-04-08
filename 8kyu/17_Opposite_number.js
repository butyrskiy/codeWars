// Todo. Very simple, given an integer or a floating-point number, find its opposite.

// * 1: -1
// * 14: -14
// * -34: 34


function opposite(number) {
  if(number > 0) {
    return Number(`-${number}`);
  } else if (number <= 0) {
    return Math.abs(number);
  }
}

opposite(1); // - 1
opposite(14); // - 14
opposite(-34); // 34
opposite(0); // 0