export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getDieRoll = () => getRandomNumber(1,3);