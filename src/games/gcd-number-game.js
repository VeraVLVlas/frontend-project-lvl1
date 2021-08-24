import readlineSync from 'readline-sync';
import {
  nameUser, generatesNumber, MAX_NUMBER_ROUNDS, MAX_NUMBER,
} from '../index.js';

export default 'Find the greatest common divisor of given numbers.';
let counter = 0;

// eslint-disable-next-line consistent-return
export const findsGreatestCommonDivisorNumber = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  const number1 = generatesNumber(MAX_NUMBER);
  const number2 = generatesNumber(MAX_NUMBER);
  console.log(`Question: ${number1} ${number2}`);
  const userResponse = readlineSync.question('Your answer: ');

  const countGcdTwoNumbers = (num1, num2) => {
    if (!num2) { return num1; }

    return countGcdTwoNumbers(num2, num1 % num2);
  };

  const result = countGcdTwoNumbers(number1, number2);

  if (result.toString() === userResponse) {
    console.log('Correct!');
    counter += 1;
    findsGreatestCommonDivisorNumber();
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was ${result}.Let's try again, ${nameUser}!`);
  }
};
