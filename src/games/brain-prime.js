import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 100;
const MIN_NUMBER = 1;
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getGameData = () => {
  const question = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(question) !== false ? 'yes' : 'no';
  const gameData = [question, answer];

  return gameData;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
