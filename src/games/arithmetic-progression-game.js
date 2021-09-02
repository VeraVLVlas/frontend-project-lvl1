import readlineSync from 'readline-sync';
import generatesNumber from '../utils.js';
import { MAX_NUMBER_ROUNDS, nameUser } from '../index.js';

let counter = 0;
let hiddenNumber = 0;
export default 'What number is missing in the progression?';

const randomStrNumber = () => {
  const randomNumber = generatesNumber(15);
  const variable = [randomNumber];
  for (let i = 0; i < 9; i += 1) {
    variable.push(randomNumber + variable[i]);
  }
  return variable;
};

const hideRandomNumber = () => {
  const stringWithNumbers = randomStrNumber();
  const randomNumberIndex = generatesNumber(stringWithNumbers.length - 1);
  hiddenNumber = stringWithNumbers[randomNumberIndex];
  stringWithNumbers[randomNumberIndex] = '..';

  return stringWithNumbers.join(' ');
};

// eslint-disable-next-line consistent-return
export const arithmeticProgression = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  const listNumbers = hideRandomNumber();

  console.log(`Question: ${listNumbers}`);
  const userResponse = readlineSync.question('Your answer: ');

  if (hiddenNumber.toString() === userResponse) {
    console.log('Correct!');
    counter += 1;
    arithmeticProgression();
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was ${hiddenNumber}.Let's try again, ${nameUser}!`);
  }
};
