import { usePlayerNames } from "../../providers/players/hooks";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";
import { useEffect, useState } from "react";
import { constructBets, constructDice, constructPlayerPoints } from "../../utils/defaults";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useDice } from "../../providers/dice/hooks";
import { useLegBets, useRaceBets } from "../../providers/bets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { Players, PointsPerLegBet, PointsPerRaceBet } from "../../consts/consts";
import { usePlayerPoints } from "../../providers/playerPoints/hook";
import RaceBet from "../Actions/RaceBet";

const initialState = {
    playerPoints: constructPlayerPoints(),
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



    const endLeg = () => {
        let legBetPoints = constructPlayerPoints();

        const camelsSorted = [].concat(...cells).reverse();
        for (let camel of camelsSorted) {
            if (legBets[camel]) {
                legBetPoints[legBets[camel]] += PointsPerLegBet[camelsSorted.findIndex(e => e === camel)];
            }
        }
        setPlayerScore(prev => {
            return {
                [Players.playerOne]: prev.playerOne + legBetPoints.playerOne + legRollPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + legBetPoints.playerTwo + legRollPoints.playerTwo
            }
        })

        setDice(constructDice());
        setLegBets(constructBets());
        setLegRollPoints(constructPlayerPoints());
    }

    const endGame = () => {
        setGameDidEnd(true);
        console.log("GAME // OVER");
        endLeg();
        let raceBetPoints = constructPlayerPoints();
        let betsThatSuceeded = 0;
        const camelThatWon = [].concat(...cells).reverse()[0];

        for (let raceBet of raceBets) {
            if (raceBet.camel === camelThatWon) {
                raceBetPoints[raceBet.player] += PointsPerRaceBet[betsThatSuceeded];
                ++betsThatSuceeded;
            } else {
                raceBetPoints[raceBet.player] -= 1;
            }
        }

        setPlayerScore(prev => {
            return {
                [Players.playerOne]: prev.playerOne + raceBetPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + raceBetPoints.playerTwo
            }
        })


        console.log(raceBetPoints);
    }

    useEffect(() => {
        if (Object.values(dice).some(roll => roll)) {
            setLegRollPoints(prev => { return { ...prev, [currentPlayer]: prev[currentPlayer] + 1 } });
            toggleCurrentPlayer();
        }
    }, [dice]);

    useEffect(() => {
        if (cells[15].length && !gameDidEnd) {
            endGame();
            return;
        }

        if (!Object.values(dice).some(roll => !roll)) {
            endLeg();
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