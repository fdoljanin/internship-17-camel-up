import { usePlayerNames } from "../../providers/players/hooks";
import {Redirect} from "react-router-dom";

const Game = () => {
    const [playerNames,] = usePlayerNames();
    if (!playerNames)
        return <Redirect to='/login' />

    
    return <h1>Game</h1>
}

export default Game;