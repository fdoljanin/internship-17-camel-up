import { usePlayerNames } from "../../providers/players/hooks";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";
import { useEffect, useState } from "react";
import { constructDice, constructPlayerPoints } from "../../utils/defaults";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useDice } from "../../providers/dice/hooks";
import { useLegBets } from "../../providers/legbets/hooks";
import { useCells } from "../../providers/cells/hooks";
import { Players, PointsPerBet } from "../../consts/consts";
import { usePlayerPoints } from "../../providers/playerPoints/hook";

const initialState = {
    playerPoints: constructPlayerPoints(),
}


const Game = () => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [dice, setDice] = useDice();
    const [legBets, setLegBets] = useLegBets();
    const [cells] = useCells();
    const [, setPlayerPoints] = usePlayerPoints();

    const endLeg = () => {
        let legPoints = constructPlayerPoints();

        const camelsSorted = [].concat(...cells).reverse();
        for (let camel of camelsSorted) {
            if (legBets[camel]) {
                legPoints[legBets[camel]] += PointsPerBet[camelsSorted.findIndex(e => e === camel)];
            }
        }
        setPlayerPoints(prev => {
            return {
                [Players.playerOne]: prev.playerOne + legPoints.playerOne,
                [Players.playerTwo]: prev.playerTwo + legPoints.playerTwo
            }
        })
        setDice(constructDice());
    }

    useEffect(() => {
        if (!Object.values(dice).some(roll => !roll)) {
            endLeg();
        }
    }, [dice]);

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