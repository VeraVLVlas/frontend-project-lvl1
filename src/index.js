import readlineSync from 'readline-sync';

export const MAX_NUMBER_ROUNDS = 3;

export const gameEngine = (rule, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 1; i <= MAX_NUMBER_ROUNDS; i += 1) {
    const generatedExpression = gameData();
    const numericExpression = generatedExpression[0];
    console.log(`Question: ${numericExpression}`);
    const userResponse = readlineSync.question('Your answer: ');
    const correctAnswer = generatedExpression[1];

    if (correctAnswer !== userResponse) {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
