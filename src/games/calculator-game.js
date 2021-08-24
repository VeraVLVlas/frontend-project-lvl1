import readlineSync from 'readline-sync';
import {
  nameUser, generatesNumber, MAX_NUMBER_ROUNDS, generatesRandomSign,
} from '../index.js';

export default 'What is the result of the expression?';
let counter = 0;
const randomSign = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
export const generateRandomMathExpression = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  let result = 0;
  const number1 = generatesNumber();
  const number2 = generatesNumber();
  const sign = generatesRandomSign(randomSign);

  console.log(`Question: ${number1} ${sign} ${number2}`);
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      result = 0;
  }

  const userResponse = readlineSync.question('Your answer: ');

  if (result.toString() === userResponse) {
    console.log('Correct!');
    counter += 1;
    generateRandomMathExpression();
  } else {
    console.log(`'${result}' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${nameUser}!`);
  }
};
