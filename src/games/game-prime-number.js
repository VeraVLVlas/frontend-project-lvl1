import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER } from '../index.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const returnArrayData = () => {
  const data = [];
  const randomNumber = [];
  const num = generatesNumber(MAX_NUMBER);
  randomNumber.push(num);
  data.push(randomNumber);

  let answer = '';
  switch (num) {
    case 1: answer = 'no'; break;
    case 2: answer = 'yes'; break;
    default: answer = '';
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
    answer = 'yes';
  }
  data.push(answer);

  return data;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
