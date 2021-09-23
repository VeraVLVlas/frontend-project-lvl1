import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_DIFFERENCE = 15;
const MIN_NUMBER = 1;
const MAX_STEP = 9;
const MIN_STEP = 5;
const ruleGame = 'What number is missing in the progression?';

const getArephmiticProgression = (value1, value2, value3) => {
  const progression = [];
  for (let i = 0; i <= value1; i += 1) {
    progression.push(value2 + value3 * i);
  }
  return progression;
};

const getGameData = () => {
  let answer = 0;
  const startingValue = generatesNumber(MIN_NUMBER, MAX_DIFFERENCE);
  const step = generatesNumber(MIN_NUMBER, MAX_STEP);
  const valueLength = generatesNumber(MIN_STEP, MAX_DIFFERENCE);
  const question = getArephmiticProgression(valueLength, startingValue,
    step);

  const randomNumberIndex = generatesNumber(MIN_NUMBER, question.length - 1);
  answer = question[randomNumberIndex];
  question[randomNumberIndex] = '..';

  const gameData = [question.join(' '), answer.toString()];

  return gameData;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
