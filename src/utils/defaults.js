import { Camels, Players } from "../consts/consts"

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