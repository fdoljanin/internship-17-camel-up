import { useAddRaceBet } from "../../providers/bets/hooks";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { constructBets } from "../../utils/defaults";
import BetModule from "../BetModule";

const RaceBet = ({ terminateAction }) => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [raceBets, addRaceBet] = useAddRaceBet();
    const existingPlayerBet = raceBets.find(bet => bet.player === currentPlayer)

    const setBet = (camelToBet, playerToBet) => {
        addRaceBet(camelToBet, playerToBet);
        toggleCurrentPlayer();
        terminateAction();
    }

    return (
        existingPlayerBet ?
            <p>You already placed a bet on {existingPlayerBet.camel}</p>
            :
            <BetModule betOptions={constructBets()}
                setBet={(camel) => setBet(camel, currentPlayer)} />
    )
};

export default RaceBet;