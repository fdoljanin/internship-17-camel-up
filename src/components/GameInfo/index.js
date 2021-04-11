import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { usePlayerScore } from "../../providers/playerScore/hook";
import { usePlayerNames } from "../../providers/playerNames/hooks";
import { Players } from "../../consts/consts";
import { PlayerInfo } from "./index.styled.js";

const GameInfo = () => {
  const [playerNames] = usePlayerNames();
  const [playerScore] = usePlayerScore();
  const [currentPlayer] = useCurrentPlayer();

  const constructPlayerInfo = (player) => {
    return `1. ${playerNames[player]} - ${playerScore[player]} points`;
  };

  return (
    <div>
      <PlayerInfo
        player={Players.playerOne}
        isCurrent={currentPlayer === Players.playerOne}
      >
        {constructPlayerInfo(Players.playerOne)}
      </PlayerInfo>
      <PlayerInfo
        player={Players.playerTwo}
        isCurrent={currentPlayer === Players.playerTwo}
      >
        {constructPlayerInfo(Players.playerTwo)}
      </PlayerInfo>
    </div>
  );
};

export default GameInfo;
