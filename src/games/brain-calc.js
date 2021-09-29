import generatesNumber from '../utils.js';
import { startGameEngine } from '../index.js';

const MAX_NUMBER = 50;
const MIN_NUMBER = 0;
const ruleGame = 'What is the answer of the mathematicalAction?';
const mathematicalAction = ['+', '-', '*'];

const calculate = (sign, num1, num2) => {
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
      answer = null;
  }
  return answer;
};

const getGameData = () => {
  const num1 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const sign = mathematicalAction[generatesNumber(MIN_NUMBER, mathematicalAction.length - 1)];
  const num2 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${num1} ${sign} ${num2}`;
  const answer = calculate(sign, num1, num2);
  const gameData = [question, answer.toString()];

  return gameData;
};

export default () => {
  startGameEngine(ruleGame, getGameData);
};
