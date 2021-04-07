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
                return <Roll setAction={setAction} /> //zamijeni ovaj bijedni setaction s resetaction
            case ActionTypes.legBet:
                return <LegBet setAction={setAction}/>
            case ActionTypes.raceBet:
                return <RaceBet setAction={setAction} /> 
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