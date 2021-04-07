import { useState } from "react";
import { ActionTypes } from "../../consts/consts";
import Roll from "./Roll";
import LegBet from "./LegBet";
import RaceBet from "./RaceBet";

const Actions = () => {
    const [action, setAction] = useState(null);

    const renderActionSwitch = (actionToRender) => {
        switch (actionToRender) {
            case ActionTypes.roll:
                return <Roll terminateAction={() => setAction()} />
            case ActionTypes.legBet:
                return <LegBet terminateAction={() => setAction(null)}/>
            case ActionTypes.raceBet:
                return <RaceBet terminateAction={() => setAction(null)} /> 
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

export default Actions;