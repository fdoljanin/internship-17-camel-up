import { usePlayerNames } from "../../providers/playerNames/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";
import { EndScreenOverlay } from "./index.styled";

const EndScreen = () => {
  const [score] = usePlayerScore();
  const [playerNames] = usePlayerNames();

  const setFinalMessage = () => {
    if (score.playerOne > score.playerTwo) {
      return `Player ${playerNames.playerOne} won!`;
    }
    if (score.playerOne < score.playerTwo) {
      return `Player ${playerNames.playerTwo} won!`;
    }
    return `Draw!`;
  };

  return (
    <EndScreenOverlay>
      <h2>{setFinalMessage()}</h2>
    </EndScreenOverlay>
  );
};

export default EndScreen;
