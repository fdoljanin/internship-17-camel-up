import React, { createContext, useReducer } from "react";
import { constructBets } from "../../utils/defaults";

const initialState = {
  legBets: constructBets(),
  raceBets: [],
};

export const BetContext = createContext({
  state: { ...initialState },
  addLegBet: () => {},
  resetLegBets: () => {},
  addRaceBet: () => {},
});

const ADD_LEG_BET = "ADD_LEG_BET";
const RESET_LEG_BETS = "RESET_LEG_BETS";
const ADD_RACE_BET = "ADD_RACE_BET";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LEG_BET:
      return {
        ...state,
        legBets: { ...state.legBets, [action.camelToBet]: action.playerToBet },
      };
    case RESET_LEG_BETS:
      return { ...state, legBets: initialState.legBets };
    case ADD_RACE_BET:
      return {
        ...state,
        raceBets: [
          ...state.raceBets,
          { camel: action.camelToBet, player: action.playerToBet },
        ],
      };
    default:
      return state;
  }
};

const BetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addLegBet = (camelToBet, playerToBet) => {
    dispatch({ type: ADD_LEG_BET, camelToBet, playerToBet });
  };

  const resetLegBets = () => {
    dispatch({ type: RESET_LEG_BETS });
  };

  const addRaceBet = (camelToBet, playerToBet) => {
    dispatch({ type: ADD_RACE_BET, camelToBet, playerToBet });
  };

  const value = {
    state,
    addLegBet,
    resetLegBets,
    addRaceBet,
  };

  return <BetContext.Provider value={value}>{children}</BetContext.Provider>;
};

export default BetProvider;
