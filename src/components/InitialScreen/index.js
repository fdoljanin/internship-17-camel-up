import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSetMessage } from "../../providers/message/hooks";
import { usePlayerNames } from "../../providers/playerNames/hooks";
import { Players } from "../../consts/consts";
import { Form } from "./index.styled";

const initialState = {
  playerNames: {
    [Players.playerOne]: "",
    [Players.playerTwo]: "",
  },
};

const InitialScreen = () => {
  const [playersForm, setPlayersForm] = useState(initialState.playerNames);
  const [playerNames, setPlayerNames] = usePlayerNames();
  const setMessage = useSetMessage();

  if (playerNames) {
    return <Redirect to="play" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setPlayersForm((prevState) => ({
      ...prevState,
      [name]: value.trimStart(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let copy = { ...playersForm };
    copy.playerOne = copy.playerOne.trim();
    copy.playerTwo = copy.playerTwo.trim();

    if (copy.playerOne === copy.playerTwo) {
      setMessage({ title: "Error", content: "No duplicate names allowed!" });
      return;
    }

    setPlayerNames(copy);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>CamelUp</h1>
      <div>
        <label htmlFor={Players.playerOne}>Enter first player name:</label>
        <input
          name={Players.playerOne}
          onChange={handleChange}
          value={playersForm[Players.playerOne]}
          placeholder="Player 1 name"
          required
        ></input>
      </div>
      <div>
        <label htmlFor={Players.playerTwo}>Enter second player name:</label>
        <input
          name={Players.playerTwo}
          onChange={handleChange}
          value={playersForm[Players.playerTwo]}
          placeholder="Player 2 name"
          required
        ></input>
      </div>
      <button type="submit">Play</button>
    </Form>
  );
};

export default InitialScreen;
