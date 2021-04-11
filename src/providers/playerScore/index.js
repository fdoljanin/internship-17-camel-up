import React, { createContext, useState } from "react";
import { Players } from "../../consts/consts";
import { constructPlayerPoints } from "../../utils/defaults";
import { returnPositiveOrZero } from "../../utils/helpers";

const initialState = {
  score: constructPlayerPoints(),
};

export const PlayerScoreContext = createContext({
  state: { ...initialState },
  setState: () => {},
});

const PlayerScoreProvider = ({ children }) => {
  const [playerScore, setPlayerScore] = useState(initialState.score);

  const setScoreNotNegative = (setter) => {
    setPlayerScore(setter);
    setPlayerScore((prev) => {
      return {
        [Players.playerOne]: returnPositiveOrZero(prev.playerOne),
        [Players.playerTwo]: returnPositiveOrZero(prev.playerTwo),
      };
    });
  };

  const value = {
    state: { playerScore },
    setPlayerScore: setScoreNotNegative,
  };

  return (
    <PlayerScoreContext.Provider value={value}>
      {children}
    </PlayerScoreContext.Provider>
  );
};

export default PlayerScoreProvider;
