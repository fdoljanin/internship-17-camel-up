import {useContext} from "react";
import {PlayerPointsContext} from ".";

const usePlayerPointsContext = () => {
    return useContext(PlayerPointsContext);
}

export const usePlayerPoints = () => {
    const {
        state: {playerPoints},
        setPlayerPoints
    } = usePlayerPointsContext();
    return [playerPoints, setPlayerPoints];
}