export const Players = {
  playerOne: "playerOne",
  playerTwo: "playerTwo",
};

export const camelForbidden = Symbol("camelForbidden");

export const Camels = {
  camelBlue: "camelBlue",
  camelYellow: "camelYellow",
  camelGreen: "camelGreen",
  camelWhite: "camelWhite",
  camelRed: "camelRed",
  [camelForbidden]: "camelForbidden",
};

export const ActionTypes = {
  legBet: "legBet",
  roll: "roll",
  raceBet: "raceBet",
};

export const PointsPerLegBet = [5, 1, -1, -1, -1];

export const PointsPerRaceBet = {
  win: [8, 5],
  lose: -1,
};

export const NUMBER_OF_CELLS = 16;
