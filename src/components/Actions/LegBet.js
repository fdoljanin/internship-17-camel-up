import { Players } from "../../consts/consts";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useLegBets } from "../../providers/legbets/hooks"
import BetModule from "../BetModule";

const LegBet = ({ setAction }) => {
    const [legBets, setLegBets] = useLegBets();
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();

    const setBet = (camelToBet, playerToBet) => {
        setLegBets(prev => { return { ...prev, [camelToBet]: playerToBet } });
        toggleCurrentPlayer();
        setAction(null);
    }

    return (
        <BetModule betOptions={legBets} setBet={(camel) => setBet(camel, currentPlayer)} />
    )
}

export default LegBet;