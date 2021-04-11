import React, { createContext, useState } from "react";
import { Players } from "../../consts/consts";

const initialState = {
  playerNames: {
    [Players.playerOne]: "",
    [Players.playerTwo]: "",
  },
};

export const PlayerNamesContext = createContext({
  state: { ...initialState },
  setState: () => {},
});

const PlayerNamesProvider = ({ children }) => {
  const [playerNames, setPlayerNames] = useState();

  const value = {
    state: { playerNames },
    setPlayerNames,
  };

  return (
    <PlayerNamesContext.Provider value={value}>
      {children}
    </PlayerNamesContext.Provider>
  );
};

export default PlayerNamesProvider;
