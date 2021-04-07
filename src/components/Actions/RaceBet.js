import { useRaceBets } from "../../providers/bets/hooks";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { constructBets } from "../../utils/defaults";
import BetModule from "../BetModule";
import Cell from "../Cell";

const RaceBet = ({setAction}) => {
    const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
    const [raceBets, setRaceBets] = useRaceBets();
    const playerBetBefore = raceBets.find(bet => bet.player === currentPlayer)

    const setBet = (camelToBet, playerToBet) => {
        setRaceBets(prev => [...prev, {player: playerToBet, camel: camelToBet}]);
    }

    return (
        playerBetBefore ? 
        <p>You already placed a bet on {playerBetBefore.camel}</p> 
        :
        <BetModule betOptions={constructBets()} setBet={(camel) => setBet(camel, currentPlayer)}/>
    )
};

export default RaceBet;