import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 100;
const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => {
  if (!value2) { return value1; }

  return getGcd(value2, value1 % value2);
};

const getGameData = () => {
  const num1 = generatesNumber(MAX_NUMBER);
  const num2 = generatesNumber(MAX_NUMBER);
  const question = [num1, num2];

  const answer = getGcd(num1, num2);
  const questionAnswer = [question.join(' '), answer.toString()];

  return questionAnswer;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
