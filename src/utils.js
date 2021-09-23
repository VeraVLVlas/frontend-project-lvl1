export default (min, max) => {
  const generatedNumber = Math.floor(min + Math.random() * (max + 1 - min));

  return generatedNumber;
};
