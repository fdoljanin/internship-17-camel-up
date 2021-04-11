import { useState } from "react";
import Roll from "./Roll";
import LegBet from "./LegBet";
import RaceBet from "./RaceBet";
import { ActionTypes } from "../../consts/consts";
import { ActionButton, ActionsPanel } from "./index.styled";

const Panel = () => {
  const [action, setAction] = useState();

  const terminateAction = () => setAction(null);

  const renderActionSwitch = (actionToRender) => {
    switch (actionToRender) {
      case ActionTypes.legBet:
        return <LegBet terminateAction={terminateAction} />;
      case ActionTypes.roll:
        return <Roll terminateAction={terminateAction} />;
      case ActionTypes.raceBet:
        return <RaceBet terminateAction={terminateAction} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <ActionsPanel>
        <ActionButton onClick={() => setAction(ActionTypes.legBet)}>
          Leg bet
        </ActionButton>
        <ActionButton onClick={() => setAction(ActionTypes.roll)}>
          Roll
        </ActionButton>
        <ActionButton onClick={() => setAction(ActionTypes.raceBet)}>
          Race bet
        </ActionButton>
      </ActionsPanel>
      {renderActionSwitch(action)}
    </div>
  );
};

export default Panel;
