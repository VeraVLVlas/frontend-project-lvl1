import readlineSync from 'readline-sync';
import {
  nameUser, generatesNumber, MAX_NUMBER_ROUNDS, MAX_NUMBER,
} from '../index.js';

let counter = 0;
export default 'Answer "yes" if the number is even, otherwise answer "no".';

// eslint-disable-next-line consistent-return
export const parityСheck = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  const number = generatesNumber(MAX_NUMBER);

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
