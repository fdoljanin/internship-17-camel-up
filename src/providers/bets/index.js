import React, { createContext, useState } from "react";
import { constructBets} from "../../utils/defaults";

const initialState = {
    legBets: constructBets(),
    raceBets: []
}

export const BetContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const BetProvider = ({children}) => {
    const [legBets, setLegBets] = useState(initialState.legBets);
    const [raceBets, setRaceBets] = useState(initialState.raceBets);

    const resetLegBets = () => setLegBets({...initialState.legBets});

    const value = {
        state: {legBets, raceBets},
        setLegBets,
        resetLegBets,
        setRaceBets
    }
 
    return (
        <BetContext.Provider value={value}>{children}</BetContext.Provider>
    );
}

export default BetProvider;