import readlineSync from 'readline-sync';
import greetsUser from './cli.js';

export const MAX_NUMBER_ROUNDS = 3;

export const gameEngine = (rule, gameData) => {
  const name = greetsUser();
  console.log(rule);
  for (let i = 1; i <= MAX_NUMBER_ROUNDS; i += 1) {
    const generatedExpression = gameData();
    const numericExpression = generatedExpression[0];
    console.log(`Question: ${numericExpression}`);
    const userResponse = readlineSync.question('Your answer: ');
    const correctAnswer = generatedExpression[1];

    if (correctAnswer === userResponse) {
      console.log('Correct!');
    } else {
      return console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
