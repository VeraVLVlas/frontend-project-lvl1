import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 50;
const MIN_NUMBER = 1;
const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (value1, value2) => {
  if (!value2) { return value1; }

  return getGcd(value2, value1 % value2);
};

const getGameData = () => {
  const num1 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const question = [num1, num2];

  const answer = getGcd(num1, num2);
  const gameData = [question.join(' '), answer.toString()];

  return gameData;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
