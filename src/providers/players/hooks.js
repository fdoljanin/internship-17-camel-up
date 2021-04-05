import {useContext} from "react";
import {PlayersContext} from ".";

const usePlayersContext = () => {
    return useContext(PlayersContext);
}

export const usePlayerNames = () => {
    const {
        state: {players},
        setPlayers
    } = usePlayersContext();
    return [players, setPlayers];
}