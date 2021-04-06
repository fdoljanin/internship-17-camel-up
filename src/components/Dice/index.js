import { useDice } from "../../providers/dice/hooks";
import { Die } from "./index.styled";

const Dice = () => {
    const [dice] = useDice();

    return (
        <div>
            {Object.keys(dice).map((camel, i) =>
                <Die key={i} camel={camel}>
                    {dice[camel] || "?"}
                </Die>)}
        </div>
    )
}

export default Dice;