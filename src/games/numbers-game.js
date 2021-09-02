import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER } from '../index.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const returnRandomNumber = () => generatesNumber(MAX_NUMBER);

const returnCorrectAnswer = (number) => {
  let answer = '';

  if (number % 2 === 0) { answer = 'yes'; }
  if (number % 2 !== 0) { answer = 'no'; }

  return answer;
};

export default () => {
  gameEngine(ruleGame, returnRandomNumber, returnCorrectAnswer);
};
