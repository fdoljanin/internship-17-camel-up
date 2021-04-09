import { useEffect } from "react";
import { useMoveCamel } from "../../providers/cells/hooks";
import { useDice } from "../../providers/dice/hooks";
import { getDiceRoll, getRandomNumber } from "../../utils/random";


const Roll = ({ terminateAction }) => {
    const moveCamel = useMoveCamel();
    const [, setDice] = useDice();

    const rollDice = () => {
        setDice(prevDice => {
            const diceNotRolled = Object.keys(prevDice).filter(die => prevDice[die] === undefined);
            const randomDieKey = diceNotRolled[getRandomNumber(0, diceNotRolled.length - 1)];
            const dieRollValue = getDiceRoll();

            moveCamel(randomDieKey, dieRollValue);
            return { ...prevDice, [randomDieKey]: dieRollValue };
        });

        terminateAction();
    }

    useEffect(rollDice, []);

    return null;
}

export default Roll;