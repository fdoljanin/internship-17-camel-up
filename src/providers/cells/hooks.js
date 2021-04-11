import { useContext } from "react";
import { CellsContext } from ".";

const useCellsContext = () => {
  return useContext(CellsContext);
};

export const useCells = () => {
  const {
    state: { cells },
  } = useCellsContext();
  return cells;
};

export const useMoveCamel = () => {
  const { moveCamel } = useCellsContext();
  return moveCamel;
};
