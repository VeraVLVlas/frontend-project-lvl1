import readlineSync from 'readline-sync';
import generatesNumber from '../utils.js';
import {
  nameUser, MAX_NUMBER_ROUNDS, MAX_NUMBER, generatesRandomSign,
} from '../index.js';

export default 'What is the correctAnswer of the expression?';
let counter = 0;
const randomSign = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
export const generateRandomMathExpression = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  const number1 = generatesNumber(MAX_NUMBER);
  const number2 = generatesNumber(MAX_NUMBER);
  const sign = generatesRandomSign(randomSign);
  let correctAnswer = '';

  console.log(`Question: ${number1} ${sign} ${number2}`);

  switch (sign) {
    case '+':
      correctAnswer = number1 + number2;
      break;
    case '-':
      correctAnswer = number1 - number2;
      break;
    case '*':
      correctAnswer = number1 * number2;
      break;
    default:
      correctAnswer = 0;
  }

  const userResponse = readlineSync.question('Your answer: ');

  if (correctAnswer.toString() === userResponse) {
    console.log('Correct!');
    counter += 1;
    generateRandomMathExpression();
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${nameUser}!`);
  }
};
