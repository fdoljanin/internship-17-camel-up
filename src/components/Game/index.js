import { usePlayerNames } from "../../providers/players/hooks";
import { useCells } from "../../providers/cells/hooks";
import { Redirect } from "react-router-dom";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";
import { constructDice } from "../../utils/defaults";
import { useState } from "react";
import { getDiceRoll, getRandomNumber } from "../../utils/random";
import { moveCamel } from "../../utils/boardActions";

const initialState = {
    dice: constructDice(),
}

const Game = () => {
    const [playerNames,] = usePlayerNames();
    const [cells, setCells] = useCells();
    const [dice, setDice] = useState(initialState.dice);

    //  if (!playerNames) {
    //        return <Redirect to='/login' />
    // }

    const rollDice = () => {
        const diceNotRolled = Object.keys(dice).filter(die => dice[die] === undefined);
        const randomDieKey = diceNotRolled[getRandomNumber(0, diceNotRolled.length - 1)];
        console.log(randomDieKey);
        const dieRollValue = getDiceRoll();

        setDice(prev => { return { ...prev, [randomDieKey]: dieRollValue } });
        moveCamelAction(randomDieKey, dieRollValue);
    }

    const moveCamelAction = (camel, steps) => {
        setCells(prev => {
            let copyCells = prev.map(cell => [...cell]);
            moveCamel(copyCells, camel, steps);
            return copyCells;
        })
    }

    return (
        <div>
            <GameInfo />
            <Board />
            <Dice dice={dice} />
            <Actions />
            <button onClick={() => rollDice()}>jewjw</button>
        </div>
    )
}

export default Game;