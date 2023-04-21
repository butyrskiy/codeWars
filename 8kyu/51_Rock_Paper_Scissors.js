// Todo. Let's play! You have to return which player won! In case of a draw return Draw!

// ? Examples(Input1, Input2 --> Output):
// * "scissors", "paper" --> "Player 1 won!"
// * "scissors", "rock" --> "Player 2 won!"
// * "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'rock') {
    return 'Player 2 won!';
  } else if (p1 === 'paper' && p2 === 'scissors') {
    return 'Player 2 won!';
  } else if (p1 === 'rock' && p2 === 'paper') {
    return 'Player 2 won!';
  } else if (p1 === p2) return 'Draw!';
};

rps('rock', 'scissors'); // "Player 1 won!"
rps('scissors', 'paper'); // "Player 1 won!"
rps('paper', 'rock'); // "Player 1 won!"

rps('scissors', 'rock'); // "Player 2 won!"
rps('paper', 'scissors'); // "Player 2 won!"
rps('rock', 'paper'); // "Player 2 won!"

rps('rock', 'rock'); // 'Draw!'
rps('scissors', 'scissors'); // 'Draw!'
rps('paper', 'paper'); // 'Draw!'
