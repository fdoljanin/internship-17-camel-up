import React, { createContext, useState } from "react";
import { constructDice } from "../../utils/defaults";

const initialState = constructDice();

export const DiceContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const DiceProvider = ({children}) => {
    const [dice, setDice] = useState(initialState);

    const value = {
        state: {dice},
        setDice
    }
 
    return (
        <DiceContext.Provider value={value}>{children}</DiceContext.Provider>
    );
}

export default DiceProvider;