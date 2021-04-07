import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";

import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { usePlayerNames } from "../../providers/players/hooks";
import { useDice } from "../../providers/dice/hooks";
import { useLegBets, useRaceBets } from "../../providers/bets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { usePlayerPoints } from "../../providers/playerPoints/hook";

import { constructBets, constructDice, constructPlayerPoints } from "../../utils/defaults";
import { Camels, Players, PointsPerLegBet, PointsPerRaceBet } from "../../consts/consts";

const initialState = {
    playerPoints: constructPlayerPoints(),
    dice: constructDice(),
    legBets: constructBets(),
}


const Game = () => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [dice, setDice] = useDice();
    const [legBets, setLegBets] = useLegBets();
    const [raceBets, setRaceBets] = useRaceBets();
    const [cells] = useCells();
    const [playerScore, setPlayerScore] = usePlayerPoints();
    const [legRollPoints, setLegRollPoints] = useState(constructPlayerPoints());
    const [gameDidEnd, setGameDidEnd] = useState(false);
    const [playerNames] = usePlayerNames();


    if (!playerNames) {
        return <Redirect to='/login' />
    }

    const calculateLegBetPoints = () => {
        const legBetPoints = initialState.playerPoints;
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

        setDice(initialState.dice);
        setLegBets(initialState.legBets);
        setLegRollPoints(initialState.playerPoints);
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
        setGameDidEnd(true);
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
        if (!gameDidEnd) {
            if (cells[15].length) {
                endGame();
                return;
            }

            if (!Object.values(dice).some(roll => !roll)) {
                endLeg();
            }
        }
    }, [legRollPoints]);


    return (
        <div>
            <GameInfo />
            <Board />
            <Dice />
            <Actions />
        </div>
    )
}

export default Game;