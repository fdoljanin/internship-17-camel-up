import { useState, useEffect } from "react";

import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useResetDice } from "../../providers/dice/hooks";
import { useResetLegBets, useRaceBets } from "../../providers/bets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";

import { constructPlayerPoints } from "../../utils/defaults";
import { NUMBER_OF_CELLS, Players } from "../../consts/consts";
import { useSetMessage } from "../../providers/message/hooks";
import { calculateLegBetPoints, calculateRaceBetPoints } from "../../utils/pointsCalculator";
import { constructLegEndMessage, constructRaceEndMessage } from "../../utils/messageConstructor";
import { usePlayerNames } from "../../providers/players/hooks";

const initialState = {
    playerPoints: constructPlayerPoints(),
}


const GameLogic = ({ setGameEnd }) => {
    const [playerNames] = usePlayerNames();
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [dice, resetDice] = useResetDice();
    const [legBets, resetLegBets] = useResetLegBets();
    const raceBets = useRaceBets();
    const cells = useCells();
    const [, setPlayerScore] = usePlayerScore();
    const [legRollPoints, setLegRollPoints] = useState(initialState.playerPoints);
    const setMessage = useSetMessage();


    const setScoreAfterLeg = (betPoints, rollPoints) => {
        setPlayerScore(prev => {
            return {
                [Players.playerOne]: prev.playerOne + betPoints.playerOne + rollPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + betPoints.playerTwo + rollPoints.playerTwo
            }
        })
    }

    const endLeg = () => {
        const legBetPoints = calculateLegBetPoints(cells, legBets);

        setScoreAfterLeg(legBetPoints, legRollPoints);

        const messageAfterLeg = constructLegEndMessage(playerNames, legBetPoints, legRollPoints);
        setMessage(messageAfterLeg);

        resetDice();
        resetLegBets();
        setLegRollPoints(initialState.playerPoints);
    }

    const setScoreAfterRace = (betPoints) => {
        setPlayerScore(prev => {
            return {
                [Players.playerOne]: prev.playerOne + betPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + betPoints.playerTwo
            }
        })
    }

    const endGame = () => {
        setGameEnd();
        endLeg();

        const raceBetPoints = calculateRaceBetPoints(cells, raceBets);

        const messageAfterRace = constructRaceEndMessage(playerNames, raceBetPoints);
        setMessage(messageAfterRace);

        setScoreAfterRace(raceBetPoints);
    }

    useEffect(() => {
        if (Object.values(dice).some(roll => roll)) {
            setLegRollPoints(prev => { return { ...prev, [currentPlayer]: prev[currentPlayer] + 1 } });
            toggleCurrentPlayer();
        }
    }, [dice]);

    useEffect(() => {
        if (cells[NUMBER_OF_CELLS - 1].length) {
            endGame();
        } else if (!Object.values(dice).some(roll => !roll)) {
            endLeg();
        }
    }, [legRollPoints]);

    return null;
}

export default GameLogic;