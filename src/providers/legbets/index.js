import React, { createContext, useState } from "react";
import { constructBets} from "../../utils/defaults";

const initialState = constructBets();

export const LegBetContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const LegBetProvider = ({children}) => {
    const [legBets, setLegBets] = useState(initialState);

    const value = {
        state: {legBets},
        setLegBets
    }
 
    return (
        <LegBetContext.Provider value={value}>{children}</LegBetContext.Provider>
    );
}

export default LegBetProvider;