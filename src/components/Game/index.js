import { usePlayerNames } from "../../providers/players/hooks";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";


const Game = () => {
    const [playerNames,] = usePlayerNames();

    return (
        <div>
            <GameInfo />
            <Board />
            <Dice />
            <Actions />
        </div>
    )
}

export default Game;