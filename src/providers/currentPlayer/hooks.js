import { useContext } from "react";
import { CurrentPlayerContext } from ".";

const useCurrentPlayerContext = () => {
  return useContext(CurrentPlayerContext);
};

export const useCurrentPlayer = () => {
  const {
    state: { currentPlayer },
    toggleCurrentPlayer,
  } = useCurrentPlayerContext();

  return [currentPlayer, toggleCurrentPlayer];
};
