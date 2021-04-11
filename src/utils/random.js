export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getDieRoll = () => getRandomNumber(1, 3);

export const getRandomElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};
