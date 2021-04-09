import React, { createContext, useState } from "react";
import { constructDice } from "../../utils/defaults";

const initialState = {
    dice: constructDice()
}

export const DiceContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const DiceProvider = ({children}) => {
    const [dice, setDice] = useState(initialState.dice);

    const resetDice = () => setDice(initialState.dice);

    const value = {
        state: {dice},
        setDice,
        resetDice
    }
 
    return (
        <DiceContext.Provider value={value}>{children}</DiceContext.Provider>
    );
}

export default DiceProvider;