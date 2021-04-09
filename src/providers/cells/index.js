import React, { createContext, useState } from "react";
import { initBoard, moveCamelOnCells } from "../../utils/boardActions";

const emptyBoard = Array(16).fill(0).map(e => []);

export const CellsContext = createContext({
    state: { ...emptyBoard },
    moveCamel: () => { }
})


const CellsProvider = ({ children }) => {
    const initialBoard = [...emptyBoard.map(e => [...e])];
    initBoard(initialBoard);
    
    const [cells, setCells] = useState(initialBoard);

    const moveCamel = (camel, steps) => {
        setCells(prev => {
            let copyCells = prev.map(cell => [...cell]);
            moveCamelOnCells(copyCells, camel, steps);
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
