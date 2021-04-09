import React, { createContext, useState } from "react";
import {Players} from '../../consts/consts';
import { constructPlayerPoints } from "../../utils/defaults";

const initialState = {
    score: constructPlayerPoints()
}

export const PlayerScoreContext = createContext({
    state: {...initialState},
    setState: () => {}
});

const PlayerScoreProvider = ({children}) => {
    const [playerScore, setPlayerScore] = useState(initialState.score);

    const value = {
        state: {playerScore},
        setPlayerScore
    }

    return (
        <PlayerScoreContext.Provider value={value}>{children}</PlayerScoreContext.Provider>
    );
}

export default PlayerScoreProvider;