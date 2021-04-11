import { useContext } from "react";
import { DiceContext } from ".";

const useDiceContext = () => {
  return useContext(DiceContext);
};

export const useDice = () => {
  const {
    state: { dice },
    setDice,
  } = useDiceContext();

  return [dice, setDice];
};

export const useResetDice = () => {
  const {
    state: { dice },
    resetDice,
  } = useDiceContext();

  return [dice, resetDice];
};
