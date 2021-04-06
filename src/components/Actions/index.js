import { useState } from "react";
import { ActionTypes } from "../../consts/consts";
import Roll from "./Roll";

const Actions = () => {
    const [action, setAction] = useState(null);

    const renderActionSwitch = (actionToRender) => {
        switch (actionToRender) {
            case ActionTypes.roll:
                return <Roll setAction={setAction}/>
            default:
                return null
        }
    }


    return (
        <div>
            <section>
                <button>Leg bet</button>
                <button onClick={() => setAction(ActionTypes.roll)}>Roll</button>
                <button>Race bet</button>
            </section>
            {renderActionSwitch(action)}
        </div>
    )
}

export default Actions;