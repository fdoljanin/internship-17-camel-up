import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useAddLegBet } from "../../providers/bets/hooks";
import BetModule from "../BetModule";

const LegBet = ({ terminateAction }) => {
    const [legBets, addLegBet] = useAddLegBet();
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();

    const setBet = (camelToBet, playerToBet) => {
        addLegBet(camelToBet, playerToBet);
        toggleCurrentPlayer();
        terminateAction();
    }

    return (
        <BetModule betOptions={legBets}
            setBet={(camel) => setBet(camel, currentPlayer)} />
    )
}

export default LegBet;