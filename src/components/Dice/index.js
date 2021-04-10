import { useDice } from "../../providers/dice/hooks";
import { DiceWrapper, Die } from "./index.styled";

const Dice = () => {
    const [dice] = useDice();

    return (
        <DiceWrapper>
            {Object.keys(dice).map((camel, i) =>
                <Die key={camel+dice[camel]} camel={camel}>
                    <span>{dice[camel] || "?"}</span>
                </Die>)}
        </DiceWrapper>
    )
}

export default Dice;