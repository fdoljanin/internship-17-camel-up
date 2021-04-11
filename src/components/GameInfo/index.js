import { Players } from "../../consts/consts";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";
import { usePlayerNames } from "../../providers/players/hooks";
import {PlayerInfo} from "./index.styled.js"


const GameInfo = () => {
    const [playerNames] = usePlayerNames();
    const [playerScore] = usePlayerScore();
    const [currentPlayer] = useCurrentPlayer();

    return (
        <div>
            <PlayerInfo player={Players.playerOne} isCurrent={currentPlayer===Players.playerOne}>
                1. {playerNames[Players.playerOne]} - {playerScore[Players.playerOne]} points
            </PlayerInfo>
            <PlayerInfo player={Players.playerTwo} isCurrent={currentPlayer===Players.playerTwo}>
                2. {playerNames[Players.playerTwo]} - {playerScore[Players.playerTwo]} points
            </PlayerInfo>
        </div>)
}

export default GameInfo;