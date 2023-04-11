// Todo. Functional closures can get overly attached. Set them straight!

// ? Why doesn't greet_abe() actually greet Abe?


var greet_abe = function() {
  var name = 'Abe';
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  name = 'Ben';
  return "Hello, " + name + '!';
};

console.log(greet_abe()); // 'Hello, Abe!', 'greet_abe() is not greeting Abe'
console.log(greet_ben()); // 'Hello, Ben!', 'greet_ben() is not greeting Ben'