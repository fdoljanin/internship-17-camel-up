import { useContext } from "react";
import { CellsContext } from ".";

const useCellsContext = () => {
    return useContext(CellsContext);
}

export const useCells = () => {
    const { state: { cells }, setCells } = useCellsContext();
    return [cells, setCells];
}