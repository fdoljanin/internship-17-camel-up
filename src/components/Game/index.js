import { Redirect } from "react-router-dom";

import GameLogic from "./GameLogic";
import GameInfo from "../GameInfo";
import Actions from "../Actions";
import Dice from "../Dice";
import Board from "../Board";

import { usePlayerNames } from "../../providers/players/hooks";
import { useState } from "react";



const Game = () => {
    const [playerNames] = usePlayerNames();
    const [gameDidEnd, setGameDidEnd] = useState(false);

    if (!playerNames) {
        return <Redirect to='/login' />
    }

    return (
        <div>
            {gameDidEnd ? "Game ended" : <GameLogic setGameEnd={()=>setGameDidEnd(true)}/>}
            <GameInfo />
            <Board />
            <Dice />
            <Actions />
        </div>
    )
}

export default Game;