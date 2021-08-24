import readlineSync from 'readline-sync';

export const MAX_NUMBER_ROUNDS = 3;

// eslint-disable-next-line import/no-mutable-exports
export let nameUser = '';

export const promptsForUsername = () => {
  const name = readlineSync.question('May I have your name?');
  return name;
};

export const greetsUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = promptsForUsername();
  nameUser = name;
  const greeting = console.log(`Hello, ${name}!`);

  return greeting;
};

export const willShowRulesGame = (value) => {
  console.log(value);
};

export const generatesNumber = () => {
  const MAX_NUMBER = 100;
  const generatedNumber = Math.ceil(Math.random() * MAX_NUMBER);

  return generatedNumber;
};

export const generatesRandomSign = (value) => {
  const generatedNumber = Math.ceil(Math.random() * value.length - 1);

  return value[generatedNumber];
};
