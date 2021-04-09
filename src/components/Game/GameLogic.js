import { useState, useEffect } from "react";

import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useResetDice } from "../../providers/dice/hooks";
import { useResetLegBets, useRaceBets } from "../../providers/bets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";

import { constructPlayerPoints } from "../../utils/defaults";
import { NUMBER_OF_CELLS, Players } from "../../consts/consts";
import { useMessage } from "../../providers/message/hooks";
import { calculateLegBetPoints,calculateRaceBetPoints } from "../../utils/pointsCalculator";

const initialState = {
    playerPoints: constructPlayerPoints(),
}


const GameLogic = ({ setGameEnd }) => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [dice, resetDice] = useResetDice();
    const [legBets, resetLegBets] = useResetLegBets();
    const raceBets = useRaceBets();
    const cells = useCells();
    const [, setPlayerScore] = usePlayerScore();
    const [legRollPoints, setLegRollPoints] = useState(initialState.playerPoints);
    const [, setMessage] = useMessage();


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

        setMessage(<div>
            <p>Leg bet points: {legBetPoints.playerOne}, {legBetPoints.playerTwo}</p>
            <p>Leg roll points: {legRollPoints.playerOne}, {legRollPoints.playerTwo}</p>
        </div>)

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
            return;
        }

        if (!Object.values(dice).some(roll => !roll)) {
            endLeg();
        }
    }, [legRollPoints]);

    return null;
}

export default GameLogic;