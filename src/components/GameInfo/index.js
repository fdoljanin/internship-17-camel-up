import { Players } from "../../consts/consts";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";
import { usePlayerNames } from "../../providers/players/hooks";

const GameInfo = () => {
    const [playerNames] = usePlayerNames();
    const [playerScore] = usePlayerScore();
    const [currentPlayer] = useCurrentPlayer();

    return (
    <div>
        <h5>{playerNames[Players.playerOne]} : {playerScore[Players.playerOne]}</h5>
        <h5>{playerNames[Players.playerTwo]} : {playerScore[Players.playerTwo]}</h5>
        <p>Current: {currentPlayer}</p>
    </div>)
}

export default GameInfo;