import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 100;
const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (value) => {
  if (value === 1) { return 'no'; }
  if (value === 2) { return 'yes'; }

  for (let i = 2; i < value; i += 1) {
    if (value % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const returnArrayData = () => {
  const question = generatesNumber(MAX_NUMBER);
  const answer = isPrime(question);
  const questionAnswer = [question, answer];

  return questionAnswer;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
