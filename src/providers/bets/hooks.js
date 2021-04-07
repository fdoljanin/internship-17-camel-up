import {useContext} from "react";
import {BetContext} from ".";

const useBetContext = () => {
    return useContext(BetContext);
}

export const useLegBets = () => {
    const {
        state: {legBets},
        setLegBets
    } = useBetContext();

    return [legBets, setLegBets];
}

export const useRaceBets = () => {
    const {
        state: {raceBets},
        setRaceBets
    } = useBetContext();

    return [raceBets, setRaceBets];
}