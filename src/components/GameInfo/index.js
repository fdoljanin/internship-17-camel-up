import { Players } from "../../consts/consts";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { usePlayerPoints } from "../../providers/playerPoints/hook";
import { usePlayerNames } from "../../providers/players/hooks";

const GameInfo = () => {
    const [playerNames] = usePlayerNames();
    const [playerScore] = usePlayerPoints();
    const [currentPlayer] = useCurrentPlayer();

    return (
    <div>
        <h5>{playerNames?.[Players.playerOne]} : {playerScore[Players.playerOne]}</h5>
        <h5>{playerNames?.[Players.playerTwo]} : {playerScore[Players.playerTwo]}</h5>
        <p>Current: {currentPlayer}</p>
    </div>)
}

export default GameInfo;