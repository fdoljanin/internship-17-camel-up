import { useEffect } from "react";
import { useCells } from "../../providers/cells/hooks";
import { useDice } from "../../providers/dice/hooks";
import { moveCamel } from "../../utils/boardActions";
import { getDiceRoll, getRandomNumber } from "../../utils/random";


const Roll = ({ terminateAction }) => {
    const [, setCells] = useCells();
    const [, setDice] = useDice();

    const rollDice = () => {
        setDice(prevDice => {
            const diceNotRolled = Object.keys(prevDice).filter(die => prevDice[die] === undefined);
            const randomDieKey = diceNotRolled[getRandomNumber(0, diceNotRolled.length - 1)];
            const dieRollValue = getDiceRoll();

            moveCamelAction(randomDieKey, dieRollValue);
            return { ...prevDice, [randomDieKey]: dieRollValue };
        });

        terminateAction();
    }

    const moveCamelAction = (camel, steps) => {
        setCells(prev => {
            let copyCells = prev.map(cell => [...cell]);
            moveCamel(copyCells, camel, steps);
            return copyCells;
        });
    }

    useEffect(rollDice, []);

    return null;
}

export default Roll;