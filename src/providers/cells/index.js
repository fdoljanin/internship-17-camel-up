import React, { createContext, useState } from "react";
import { moveCamelInCells } from "../../utils/boardActions";
import { constructBoardWithCamels } from "../../utils/defaults";

const initialState = {
    cells: constructBoardWithCamels()
}

export const CellsContext = createContext({
    state: { ...initialState },
    moveCamel: () => { }
})


const CellsProvider = ({ children }) => {
    const [cells, setCells] = useState(initialState.cells);

    const moveCamel = (camel, steps) => {
        setCells(prevBoard => {
            const copyCells = prevBoard.map(cell => [...cell]);
            moveCamelInCells(copyCells, camel, steps);
            return copyCells;
        });
    }

    const value = {
        state: { cells },
        moveCamel
    }

    return <CellsContext.Provider value={value}>{children}</CellsContext.Provider>
}

export default CellsProvider;
