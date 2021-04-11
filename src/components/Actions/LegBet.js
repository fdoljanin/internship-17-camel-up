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
        <div>
            <p>Place a leg bet:</p>
            <BetModule betOptions={legBets}
                setBet={(camel) => setBet(camel, currentPlayer)} />
        </div>
    )
}

export default LegBet;