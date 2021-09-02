/* eslint-disable default-case */
import readlineSync from 'readline-sync';
import generatesNumber from '../utils.js';
import {
  nameUser, MAX_NUMBER_ROUNDS, MAX_NUMBER,
} from '../index.js';

export default 'Answer "yes" if given number is prime. Otherwise answer "no".';
let counter = 0;

const checkNumberPrime = (num) => {
  let answer = '';

  switch (num) {
    case 1: answer = 'no'; break;
    case 2: answer = 'yes'; break;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
    answer = 'yes';
  }
  return answer;
};

// eslint-disable-next-line consistent-return
export const gameEngine = () => {
  if (counter === MAX_NUMBER_ROUNDS) { return console.log(`Congratulations, ${nameUser}!`); }

  const number = generatesNumber(MAX_NUMBER);

  console.log(`Question: ${number}`);
  const result = checkNumberPrime(number);
  const userResponse = readlineSync.question('Your answer: ');

  if (userResponse === result) {
    console.log('Correct!');
    counter += 1;
    gameEngine();
  } else {
    console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${result}'.Let's try again, ${nameUser}!`);
  }
};
