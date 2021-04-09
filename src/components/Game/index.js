import { Redirect } from "react-router-dom";

import GameLogic from "./GameLogic";
import GameInfo from "../GameInfo";
import Panel from "../Actions";
import Dice from "../Dice";
import Board from "../Board";

import CellsProvider from '../../providers/cells';
import CurrentPlayerProvider from '../../providers/currentPlayer';
import DiceProvider from '../../providers/dice';
import BetProvider from '../../providers/bets';
import PlayerScoreProvider from '../../providers/playerScore';

import { usePlayerNames } from "../../providers/players/hooks";
import { useState } from "react";

const Game = () => {
    const [playerNames] = usePlayerNames();
    const [gameDidEnd, setGameDidEnd] = useState(false);

    if (!playerNames) {
        return <Redirect to='/login' />
    }

    return (
        <CurrentPlayerProvider>
            <CellsProvider>
                <DiceProvider>
                    <BetProvider>
                        <PlayerScoreProvider>
                            <GameLogic setGameEnd={() => setGameDidEnd(true)} />
                            <GameInfo />
                            <Board />
                            <Dice />
                            <Panel />
                        </PlayerScoreProvider>
                    </BetProvider>
                </DiceProvider>
            </CellsProvider>
        </CurrentPlayerProvider>
    )
}

export default Game;