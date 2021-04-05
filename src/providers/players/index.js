import React, { createContext, useState } from "react";
import {Players} from '../../consts/consts';

const initialState = {
    [Players.playerOne]: "",
    [Players.playerTwo]: ""
}

export const PlayersContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const PlayersProvider = ({children}) => {
    const [players, setPlayers] = useState();

    const value = {
        state: {players},
        setPlayers
    }

    return (
        <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
    );
}

export default PlayersProvider;