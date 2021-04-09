import { useState, useEffect } from "react";

import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useResetDice} from "../../providers/dice/hooks";
import { useResetLegBets, useRaceBets } from "../../providers/bets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { usePlayerPoints } from "../../providers/playerPoints/hook";

import { constructBets, constructDice, constructPlayerPoints } from "../../utils/defaults";
import { Players, PointsPerLegBet, PointsPerRaceBet } from "../../consts/consts";
import { useMessage } from "../../providers/message/hooks";

const initialState = {
    playerPoints: constructPlayerPoints(),
    dice: constructDice(),
    legBets: constructBets(),
}


const GameLogic = ({setGameEnd}) => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [dice, resetDice] = useResetDice();
    const [legBets, resetLegBets] = useResetLegBets();
    const [raceBets,] = useRaceBets();
    const cells = useCells();
    const [, setPlayerScore] = usePlayerPoints();
    const [legRollPoints, setLegRollPoints] = useState(initialState.playerPoints);
    const [, setMessage] = useMessage();


    const calculateLegBetPoints = () => {
        const legBetPoints = {...initialState.playerPoints};
        const camelsSorted = [].concat(...cells).reverse();

        camelsSorted.forEach((camel, index) => {
            const playerThatBetted = legBets[camel];

            if (playerThatBetted) {
                legBetPoints[playerThatBetted] += PointsPerLegBet[index];
            }
        });

        return legBetPoints;
    }

    const setScoreAfterLeg = (betPoints, rollPoints) => {
        setPlayerScore(prev => {
            return {
                [Players.playerOne]: prev.playerOne + betPoints.playerOne + rollPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + betPoints.playerTwo + rollPoints.playerTwo
            }
        })
    }

    const endLeg = () => {
        const legBetPoints = calculateLegBetPoints();

        setScoreAfterLeg(legBetPoints, legRollPoints);

        setMessage(<div>
            <p>Leg bet points: {legBetPoints.playerOne}, {legBetPoints.playerTwo}</p>
            <p>Leg roll points: {legRollPoints.playerOne}, {legRollPoints.playerTwo}</p>
        </div>)

        resetDice();
        resetLegBets();
        setLegRollPoints({...initialState.playerPoints});
    }


    const calculateRaceBetPoints = () => {
        const raceBetPoints = initialState.playerPoints;
        const camelThatWon = [].concat(...cells).reverse()[0];
        let betsThatSuceeded = 0;

        raceBets.forEach(raceBet => {
            if (raceBet.camel === camelThatWon) {
                raceBetPoints[raceBet.player] += PointsPerRaceBet[betsThatSuceeded];
                ++betsThatSuceeded;
                return;
            }

            raceBetPoints[raceBet.player] -= 1;
        });

        return raceBetPoints;
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

        const raceBetPoints = calculateRaceBetPoints();
        setScoreAfterRace(raceBetPoints);
    }


    useEffect(() => {
        if (Object.values(dice).some(roll => roll)) {
            setLegRollPoints(prev => { return { ...prev, [currentPlayer]: prev[currentPlayer] + 1 } });
            toggleCurrentPlayer();
        }
    }, [dice]);

    useEffect(() => {
            if (cells[15].length) {
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