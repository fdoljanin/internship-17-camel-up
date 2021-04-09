import React, { createContext, useState } from "react";
import { constructBets } from "../../utils/defaults";

const initialState = {
    legBets: constructBets(),
    raceBets: []
}

export const BetContext = createContext({
    state: { ...initialState },
    addLegBet: () => { },
    resetLegBets: () => { },
    addRaceBet: () => { }
});

const BetProvider = ({ children }) => {
    const [legBets, setLegBets] = useState(initialState.legBets);
    const [raceBets, setRaceBets] = useState(initialState.raceBets);

    const resetLegBets = () => setLegBets(initialState.legBets);

    const addLegBet = (camelToBet, playerToBet) =>
        setLegBets(prev => { return { ...prev, [camelToBet]: playerToBet } });

    const addRaceBet = (camelToBet, playerToBet) =>
        setRaceBets(prev => [...prev, { camel: camelToBet, player: playerToBet }]);

    const value = {
        state: { legBets, raceBets },
        addLegBet,
        resetLegBets,
        addRaceBet
    }

    return (
        <BetContext.Provider value={value}>{children}</BetContext.Provider>
    );
}

export default BetProvider;