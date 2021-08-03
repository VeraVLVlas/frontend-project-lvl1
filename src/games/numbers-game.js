import readlineSync from 'readline-sync';
import { nameUser } from '../cli.js';

let counter = 0;

const willShowRulesGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

const generatesNumber = () => {
  const MAX_NUMBER = 100;
  const generatedNumber = Math.ceil(Math.random() * MAX_NUMBER);

  return generatedNumber;
};

// eslint-disable-next-line consistent-return
const parityСheck = () => {
  if (counter === 3) { return console.log(`Congratulations, ${nameUser}!`); }

  const number = generatesNumber();
  console.log(`Question: ${number}`);
  const userResponse = readlineSync.question('Your answer: ');

  if ((number % 2 === 0 && userResponse === 'yes') || (number % 2 !== 0 && userResponse === 'no')) {
    console.log('Correct!');
    counter += 1;
    parityСheck();
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${nameUser}!`);
  }
};

export { willShowRulesGame, parityСheck };
