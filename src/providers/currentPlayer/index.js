import React, { createContext, useState } from "react";
import { Players } from '../../consts/consts';
import { getRandomNumber } from "../../utils/random";


const playerTypes = Object.keys(Players);

const initialState = {
    currentPlayer: playerTypes[getRandomNumber(0, playerTypes.length - 1)]
}

export const CurrentPlayerContext = createContext({
    state: { ...initialState },
    toggleCurrentPlayer: () => { }
});

const toggleCurrentPlayer = (setCurrentPlayer) => {
    setCurrentPlayer(prev => {
        const indexOfPrevPlayer = playerTypes.indexOf(prev);
        return playerTypes[(indexOfPrevPlayer + 1) % playerTypes.length];
    })
}

const CurrentPlayerProvider = ({ children }) => {
    const [currentPlayer, setCurrentPlayer] = useState(initialState.currentPlayer);

    const value = {
        state: { currentPlayer },
        toggleCurrentPlayer: () => toggleCurrentPlayer(setCurrentPlayer)
    }

    return (
        <CurrentPlayerContext.Provider value={value}>{children}</CurrentPlayerContext.Provider>
    );
}

export default CurrentPlayerProvider;