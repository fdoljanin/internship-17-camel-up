import { useEffect } from "react";
import { useMoveCamel } from "../../providers/cells/hooks";
import { useDice } from "../../providers/dice/hooks";
import { getDieRoll, getRandomNumber } from "../../utils/random";


const Roll = ({ terminateAction }) => {
    const moveCamel = useMoveCamel();
    const [, setDice] = useDice();

    const rollDice = () => {
        setDice(prevDice => {
            const camelDiceNotRolled = Object.keys(prevDice).filter(die => prevDice[die] === undefined);
            const randomCamelDie = camelDiceNotRolled[getRandomNumber(0, camelDiceNotRolled.length - 1)];
            const dieRollValue = getDieRoll();

            moveCamel(randomCamelDie, dieRollValue);
            return { ...prevDice, [randomCamelDie]: dieRollValue };
        });

        terminateAction();
    }

    useEffect(rollDice, []);

    return null;
}

export default Roll;