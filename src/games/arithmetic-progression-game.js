import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER_DIFFERENCE = 15;
const MAX_STEP_PROGRESSION = 9;
const lengthProgression = [5, 6, 7, 8, 9, 10];
const ruleGame = 'What number is missing in the progression?';

const getArephmiticProgression = (value1, value2, value3) => {
  const startingValue = generatesNumber(value1);
  const step = generatesNumber(value2);
  const valueLength = value3[generatesNumber(value3.length - 1)];
  const progression = [];
  for (let i = 0; i <= valueLength; i += 1) {
    progression.push(startingValue + step * i);
  }
  return progression;
};

const returnArrayData = () => {
  let answer = 0;

  const question = getArephmiticProgression(MAX_NUMBER_DIFFERENCE,
    MAX_STEP_PROGRESSION, lengthProgression);

  const randomNumberIndex = generatesNumber(question.length - 1);
  answer = question[randomNumberIndex];
  question[randomNumberIndex] = '..';

  const questionAnswer = [question.join(' '), answer.toString()];

  return questionAnswer;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
