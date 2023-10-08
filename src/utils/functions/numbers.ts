// Used default initializers according to game specs, but can be reused this way
export const generateRandomNumber = (min = 0, max = 11) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomNumberFromPrevious = (previousNumber: number, min = 0, max = 11): number => {
  let randomNumber: number;

  do {
    randomNumber = generateRandomNumber(min, max);
  } while (randomNumber === previousNumber);

  return randomNumber;
};
