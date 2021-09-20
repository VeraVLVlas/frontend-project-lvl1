import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 100;
const ruleGame = 'What is the answer of the mathematicalAction?';
const mathematicalAction = ['+', '-', '*'];

const evaluatesExpression = (sign, num1, num2) => {
  let answer = '';
  switch (sign) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      answer = 0;
  }
  return answer;
};

const returnArrayData = () => {
  const num1 = generatesNumber(MAX_NUMBER);
  const sign = mathematicalAction[generatesNumber(mathematicalAction.length - 1)];
  const num2 = generatesNumber(MAX_NUMBER);
  const question = [num1, sign, num2];
  const answer = evaluatesExpression(sign, num1, num2);
  const questionAnswer = [question.join(' '), answer.toString()];

  return questionAnswer;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
