import { useEffect } from "react";
import BetModule from "../BetModule";
import { useAddRaceBet } from "../../providers/bets/hooks";
import { useCurrentPlayer } from "../../providers/currentPlayer/hooks";
import { useSetMessage } from "../../providers/message/hooks";
import { constructBets } from "../../utils/defaults";

const RaceBet = ({ terminateAction }) => {
  const [currentPlayer, toggleCurrentPlayer] = useCurrentPlayer();
  const [raceBets, addRaceBet] = useAddRaceBet();
  const existingPlayerBet = raceBets.find(
    (bet) => bet.player === currentPlayer
  );
  const setMessage = useSetMessage();

  const setBet = (camelToBet, playerToBet) => {
    addRaceBet(camelToBet, playerToBet);
    toggleCurrentPlayer();
    terminateAction();
  };

  useEffect(() => {
    if (existingPlayerBet) {
      setMessage({
        title: "Move not allowed",
        content: `You already placed a bet on ${existingPlayerBet.camel}`,
      });
      terminateAction();
    }
  }, []);

  return (
    <div>
      {existingPlayerBet ? null : (
        <BetModule
          betOptions={constructBets()}
          setBet={(camel) => setBet(camel, currentPlayer)}
        />
      )}
    </div>
  );
};

export default RaceBet;
