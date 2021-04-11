import { useContext } from "react";
import { PlayerNamesContext } from ".";

const usePlayerNamesContext = () => {
  return useContext(PlayerNamesContext);
};

export const usePlayerNames = () => {
  const {
    state: { playerNames },
    setPlayerNames,
  } = usePlayerNamesContext();
  return [playerNames, setPlayerNames];
};
