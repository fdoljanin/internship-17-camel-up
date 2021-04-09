import { useState } from "react";
import { ActionTypes } from "../../consts/consts";
import Roll from "./Roll";
import LegBet from "./LegBet";
import RaceBet from "./RaceBet";

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
                <button onClick={() => setAction(ActionTypes.legBet)}>Leg bet</button>
                <button onClick={() => setAction(ActionTypes.roll)}>Roll</button>
                <button onClick={() => setAction(ActionTypes.raceBet)}>Race bet</button>
            </section>
            {renderActionSwitch(action)}
        </div>
    )
}

export default Panel;