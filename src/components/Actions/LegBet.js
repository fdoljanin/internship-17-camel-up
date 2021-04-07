import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useLegBets } from "../../providers/bets/hooks";
import BetModule from "../BetModule";

const LegBet = ({ terminateAction }) => {
    const [legBets, setLegBets] = useLegBets();
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();

    const setBet = (camelToBet, playerToBet) => {
        setLegBets(prev => { return { ...prev, [camelToBet]: playerToBet } });
        toggleCurrentPlayer();
        terminateAction(null);
    }

    return (
        <BetModule betOptions={legBets}
            setBet={(camel) => setBet(camel, currentPlayer)} />
    )
}

export default LegBet;