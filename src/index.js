import readlineSync from 'readline-sync';

export const MAX_NUMBER_ROUNDS = 3;
export const MAX_NUMBER = 100;
export const MAX_NUMBER_DIFFERENCE = 15;

// eslint-disable-next-line import/no-mutable-exports
export let nameUser = '';

export const greetsUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  nameUser = name;
  console.log(`Hello, ${name}!`);

  return name;
};

export const willShowRulesGame = (value) => {
  console.log(value);
};

export const gameEngine = (rule, expression) => {
  const name = greetsUser();
  console.log(rule);
  for (let i = 1; i <= MAX_NUMBER_ROUNDS; i += 1) {
    const generatedExpression = expression();
    const numericExpression = generatedExpression[0].join(' ');
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
