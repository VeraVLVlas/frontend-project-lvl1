import generatesNumber from '../utils.js';
import { gameEngine } from '../index.js';

const MAX_NUMBER = 100;
const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getAnswer = (value) => (value % 2 === 0 ? 'yes' : 'no');

const returnArrayData = () => {
  const question = generatesNumber(MAX_NUMBER);
  const answer = getAnswer(question);
  const questionAnswer = [question, answer];

  return questionAnswer;
};

export default () => {
  gameEngine(ruleGame, returnArrayData);
};
