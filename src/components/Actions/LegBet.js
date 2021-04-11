import BetModule from "../BetModule";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useAddLegBet } from "../../providers/bets/hooks";

const LegBet = ({ terminateAction }) => {
  const [legBets, addLegBet] = useAddLegBet();
  const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();

  const setBet = (camelToBet, playerToBet) => {
    addLegBet(camelToBet, playerToBet);
    toggleCurrentPlayer();
    terminateAction();
  };

  return (
    <div>
      <BetModule
        betOptions={legBets}
        setBet={(camel) => setBet(camel, currentPlayer)}
      />
    </div>
  );
};

export default LegBet;
