import {useContext} from "react";
import {PlayerScoreContext} from ".";

const usePlayerScoreContext = () => {
    return useContext(PlayerScoreContext);
}

export const usePlayerScore = () => {
    const {
        state: {playerScore},
        setPlayerScore
    } = usePlayerScoreContext();
    return [playerScore, setPlayerScore];
}