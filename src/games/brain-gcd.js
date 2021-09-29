import generatesNumber from '../utils.js';
import { startGameEngine } from '../index.js';

const MAX_NUMBER = 50;
const MIN_NUMBER = 1;
const ruleGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) { return num1; }

  return getGcd(num2, num1 % num2);
};

const getGameData = () => {
  const num1 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const num2 = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const question = `${num1} ${num2}`;

  const answer = getGcd(num1, num2);
  const gameData = [question, answer.toString()];

  return gameData;
};

export default () => {
  startGameEngine(ruleGame, getGameData);
};
