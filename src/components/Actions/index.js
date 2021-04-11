import { useState } from "react";
import { ActionTypes } from "../../consts/consts";
import Roll from "./Roll";
import LegBet from "./LegBet";
import RaceBet from "./RaceBet";
import { ActionButton } from "./index.styled";

const Panel = () => {
    const [action, setAction] = useState();

    const terminateAction = () => setAction(null);

    const renderActionSwitch = (actionToRender) => {
        switch (actionToRender) {
            case ActionTypes.legBet:
                return <LegBet terminateAction={terminateAction} />
            case ActionTypes.roll:
                return <Roll terminateAction={terminateAction} />
            case ActionTypes.raceBet:
                return <RaceBet terminateAction={terminateAction} />
            default:
                return null
        }
    }

    return (
        <div>
            <section>
                <ActionButton onClick={() => setAction(ActionTypes.legBet)}>Leg bet</ActionButton>
                <ActionButton onClick={() => setAction(ActionTypes.roll)}>Roll</ActionButton>
                <ActionButton onClick={() => setAction(ActionTypes.raceBet)}>Race bet</ActionButton>
            </section>
            {renderActionSwitch(action)}
        </div>
    )
}

export default Panel;