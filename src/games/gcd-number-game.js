import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER } from '../index.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const returnArrayData = () => {
  const data = [];
  const randomNumber = [];
  const num1 = generatesNumber(MAX_NUMBER);
  randomNumber.push(num1);
  const num2 = generatesNumber(MAX_NUMBER);
  randomNumber.push(num2);
  data.push(randomNumber);

  const countGcdTwoNumbers = (value1, value2) => {
    if (!value2) { return value1; }

    return countGcdTwoNumbers(value2, value1 % value2);
  };
  const answer = countGcdTwoNumbers(num1, num2);
  data.push(answer.toString());

  return data;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
