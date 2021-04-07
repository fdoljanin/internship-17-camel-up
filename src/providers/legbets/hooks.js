import {useContext} from "react";
import {LegBetContext} from ".";

const useLegBetContext = () => {
    return useContext(LegBetContext);
}

export const useLegBets = () => {
    const {
        state: {legBets},
        setLegBets
    } = useLegBetContext();

    return [legBets, setLegBets];
}