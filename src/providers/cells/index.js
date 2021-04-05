import React, { createContext, useState } from "react";
import { initBoard } from "../../utils/boardActions";

const emptyBoard = Array(16).fill(0).map(e => []);

export const CellsContext = createContext({
    state: { ...emptyBoard },
    setCells: () => { }
})

const CellsProvider = ({ children }) => {
    const initialBoard = [...emptyBoard.map(e => [...e])];
    initBoard(initialBoard);
    
    const [cells, setCells] = useState(initialBoard);

    const value = {
        state: { cells },
        setCells
    }

    return <CellsContext.Provider value={value}>{children}</CellsContext.Provider>
}

export default CellsProvider;
