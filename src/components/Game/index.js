import { usePlayerNames } from "../../providers/players/hooks";
import {useCells} from "../../providers/cells/hooks";
import { Redirect } from "react-router-dom";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";

const Game = () => {
    const [playerNames,] = usePlayerNames();
    const [cells, setCells] = useCells();

    if (!playerNames)
        return <Redirect to='/login' />
    

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