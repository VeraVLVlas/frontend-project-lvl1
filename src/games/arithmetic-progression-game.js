import generatesNumber from '../utils.js';
import { gameEngine, MAX_NUMBER_DIFFERENCE } from '../index.js';

const ruleGame = 'What number is missing in the progression?';

const returnArrayData = () => {
  const data = [];
  let hiddenNumber = 0;
  const randomStrNumber = () => {
    const randomNumber = generatesNumber(MAX_NUMBER_DIFFERENCE);
    const variable = [randomNumber];
    for (let i = 0; i < 9; i += 1) {
      variable.push(randomNumber + variable[i]);
    }
    return variable;
  };

  const hideRandomNumber = () => {
    const stringWithNumbers = randomStrNumber();
    const randomNumberIndex = generatesNumber(stringWithNumbers.length - 1);
    hiddenNumber = stringWithNumbers[randomNumberIndex];
    stringWithNumbers[randomNumberIndex] = '..';

    return stringWithNumbers;
  };
  const arithmeticProgression = hideRandomNumber();
  data.push(arithmeticProgression);
  data.push(hiddenNumber.toString());

  return data;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
