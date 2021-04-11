import React, { createContext, useState } from "react";
import { constructCurrentPlayer } from "../../utils/defaults";
import { Players } from "../../consts/consts";

const initialState = {
  currentPlayer: constructCurrentPlayer(),
};

export const CurrentPlayerContext = createContext({
  state: { ...initialState },
  toggleCurrentPlayer: () => {},
});

const toggleCurrentPlayer = (setCurrentPlayer) => {
  setCurrentPlayer((prev) =>
    prev === Players.playerOne ? Players.playerTwo : Players.playerOne
  );
};

const CurrentPlayerProvider = ({ children }) => {
  const [currentPlayer, setCurrentPlayer] = useState(
    initialState.currentPlayer
  );

  const value = {
    state: { currentPlayer },
    toggleCurrentPlayer: () => toggleCurrentPlayer(setCurrentPlayer),
  };

  return (
    <CurrentPlayerContext.Provider value={value}>
      {children}
    </CurrentPlayerContext.Provider>
  );
};

export default CurrentPlayerProvider;
