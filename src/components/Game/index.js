import { useState } from "react";
import { Redirect } from "react-router-dom";

import GameLogic from "./GameLogic";
import GameInfo from "../GameInfo";
import Panel from "../Actions";
import Dice from "../Dice";
import Board from "../Board";
import EndScreen from "../EndScreen";

import CellsProvider from "../../providers/cells";
import CurrentPlayerProvider from "../../providers/currentPlayer";
import DiceProvider from "../../providers/dice";
import BetProvider from "../../providers/bets";
import PlayerScoreProvider from "../../providers/playerScore";

import { usePlayerNames } from "../../providers/playerNames/hooks";

import { GameWrapper } from "./index.styled";

const Game = () => {
  const [playerNames] = usePlayerNames();
  const [gameDidEnd, setGameDidEnd] = useState(false);

  if (!playerNames) {
    return <Redirect to="/login" />;
  }

  return (
    //reducer was not used due to performance
    <CurrentPlayerProvider>
      <CellsProvider>
        <DiceProvider>
          <BetProvider>
            <PlayerScoreProvider>
              <GameWrapper>
                {!gameDidEnd ? (
                  <GameLogic setGameEnd={() => setGameDidEnd(true)} />
                ) : (
                  <EndScreen />
                )}
                <GameInfo />
                <div className="boardDiceWrapper">
                  <Board />
                  <Dice />
                </div>
                <Panel />
              </GameWrapper>
            </PlayerScoreProvider>
          </BetProvider>
        </DiceProvider>
      </CellsProvider>
    </CurrentPlayerProvider>
  );
};

export default Game;
