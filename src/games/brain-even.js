import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 50;
const MIN_NUMBER = 1;
const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const parityСheck = (num) => (num % 2 === 0);

const getGameData = () => {
  const question = generatesNumber(MIN_NUMBER, MAX_NUMBER);
  const answer = parityСheck(question) ? 'yes' : 'no';
  const gameData = [question, answer];

  return gameData;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
