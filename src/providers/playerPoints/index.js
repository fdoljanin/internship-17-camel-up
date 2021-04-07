import React, { createContext, useState } from "react";
import {Players} from '../../consts/consts';

const initialState = {
    [Players.playerOne]: 0,
    [Players.playerTwo]: 0
}

export const PlayerPointsContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const PlayerPointsProvider = ({children}) => {
    const [playerPoints, setPlayerPoints] = useState(initialState);

    const value = {
        state: {playerPoints},
        setPlayerPoints
    }

    return (
        <PlayerPointsContext.Provider value={value}>{children}</PlayerPointsContext.Provider>
    );
}

export default PlayerPointsProvider;