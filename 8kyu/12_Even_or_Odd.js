// Todo. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
  if(number % 2 === 0) return 'Even';
  else return 'Odd';
}

evenOrOdd(2); // "Even"
evenOrOdd(7); // "Odd"
evenOrOdd(-42); // "Even"
evenOrOdd(-7); // "Odd"