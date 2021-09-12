import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER } from '../index.js';

const ruleGame = 'What is the correctAnswer of the expression?';
const randomSign = ['+', '-', '*'];

const returnArrayData = () => {
  const data = [];
  const mathematicalExpression = [];
  const num1 = generatesNumber(MAX_NUMBER);
  mathematicalExpression.push(num1);
  const sign = randomSign[generatesNumber(randomSign.length - 1)];
  mathematicalExpression.push(sign);
  const num2 = generatesNumber(MAX_NUMBER);
  mathematicalExpression.push(num2);
  data.push(mathematicalExpression);

  let correctAnswer = '';
  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = 0;
  }
  data.push(correctAnswer.toString());

  return data;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
