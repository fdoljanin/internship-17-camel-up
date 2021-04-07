import { useState } from "react";
import { ActionTypes } from "../../consts/consts";
import Roll from "./Roll";
import LegBet from "./LegBet";

const Actions = () => {
    const [action, setAction] = useState(null);

    const renderActionSwitch = (actionToRender) => {
        switch (actionToRender) {
            case ActionTypes.roll:
                return <Roll setAction={setAction} />
            case ActionTypes.legBet:
                return <LegBet setAction={setAction}/>
            default:
                return null
        }
    }


    return (
        <div>
            <section>
                <button onClick={() => setAction(ActionTypes.legBet)}>Leg bet</button>
                <button onClick={() => setAction(ActionTypes.roll)}>Roll</button>
                <button>Race bet</button>
            </section>
            {renderActionSwitch(action)}
        </div>
    )
}

export default Actions;