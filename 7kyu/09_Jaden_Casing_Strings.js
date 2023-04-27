// Todo. Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => {
      return el[0].toUpperCase() + el.slice(1);
    })
    .join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";
str.toJadenCase(); // "How Can Mirrors Be Real If Our Eyes Aren't Real"
