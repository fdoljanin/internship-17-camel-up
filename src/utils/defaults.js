import { NUMBER_OF_CELLS, Camels, Players } from "../consts/consts"
import { initCamelsInCells } from "./boardActions"

export const constructDice = () => {
    return {
        [Camels.camelBlue]: undefined,
        [Camels.camelYellow]: undefined,
        [Camels.camelGreen]: undefined,
        [Camels.camelWhite]: undefined,
        [Camels.camelRed]: undefined,
    }
}

export const constructBets = () => {
    return {
        [Camels.camelBlue]: undefined,
        [Camels.camelYellow]: undefined,
        [Camels.camelGreen]: undefined,
        [Camels.camelWhite]: undefined,
        [Camels.camelRed]: undefined,
    }
}

export const constructPlayerPoints = () => {
    return {
        [Players.playerOne]: 0,
        [Players.playerTwo]: 0
    }
}

export const constructBoard = () => {
    return Array(NUMBER_OF_CELLS).fill(0).map(()=>[]);
}

export const constructBoardWithCamels = () => {
    const emptyBoardCells = constructBoard();
    initCamelsInCells(emptyBoardCells);
    return emptyBoardCells;
}