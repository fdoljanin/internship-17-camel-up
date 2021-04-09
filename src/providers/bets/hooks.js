import { useContext } from "react";
import { BetContext } from ".";

const useBetContext = () => {
    return useContext(BetContext);
}

export const useAddLegBet = () => {
    const {
        state: { legBets },
        addLegBet
    } = useBetContext();

    return [legBets, addLegBet];
}

export const useResetLegBets = () => {
    const {
        state: { legBets },
        resetLegBets
    } = useBetContext();

    return [legBets, resetLegBets];
}

export const useRaceBets = () => {
    const {
        state: { raceBets },
    } = useBetContext();

    return raceBets;
}

export const useAddRaceBet = () => {
    const {
        state: { raceBets },
        addRaceBet
    } = useBetContext();

    return [raceBets, addRaceBet];
}