import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_DIFFERENCE = 15;
const MIN_NUMBER = 1;
const MAX_STEP = 9;
const MIN_STEP = 5;
const ruleGame = 'What number is missing in the progression?';

const getArephmiticProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i <= length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getGameData = () => {
  let answer = 0;
  const start = generatesNumber(MIN_NUMBER, MAX_DIFFERENCE);
  const step = generatesNumber(MIN_NUMBER, MAX_STEP);
  const length = generatesNumber(MIN_STEP, MAX_STEP);
  const question = getArephmiticProgression(length, start, step);

  const randomNumberIndex = generatesNumber(MIN_NUMBER, question.length - 1);
  answer = question[randomNumberIndex];
  question[randomNumberIndex] = '..';

  const gameData = [question.join(' '), answer.toString()];

  return gameData;
};

export default () => {
  gameEngine(ruleGame, getGameData);
};
