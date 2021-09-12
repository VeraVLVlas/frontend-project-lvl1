import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER } from '../index.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const returnArrayData = () => {
  const data = [];
  const randomNumber = [];
  const num = generatesNumber(MAX_NUMBER);
  randomNumber.push(num);
  data.push(randomNumber);

  let answer = '';
  if (num % 2 === 0) { answer = 'yes'; }
  if (num % 2 !== 0) { answer = 'no'; }
  data.push(answer);

  return data;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
