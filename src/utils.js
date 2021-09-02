export default (value) => {
  const generatedNumber = Math.ceil(Math.random() * value);

  return generatedNumber;
};
