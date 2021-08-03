import promptsForUsername from './games/prompts-for-username.js';

// eslint-disable-next-line import/no-mutable-exports
let nameUser = '';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = promptsForUsername();
  nameUser = name;
  const greeting = console.log(`Hello, ${name}!`);

  return greeting;
};

export { nameUser };
