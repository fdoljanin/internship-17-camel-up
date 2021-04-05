import { useState } from "react";
import {Redirect} from "react-router-dom";
import { Players } from "../../consts/consts";
import { usePlayerNames } from "../../providers/players/hooks";

const initialState = {
    [Players.playerOne]: '',
    [Players.playerTwo]: ''
}

const InitialScreen = ({ setPlayers }) => {
    const [playersForm, setPlayersForm] = useState(initialState);
    const [playerNames, setPlayerNames] = usePlayerNames();

    if (playerNames)
        return <Redirect to="play" />

    const handleChange = ({ target: { name, value } }) => {
        setPlayersForm((prevState) => ({ ...prevState, [name]: value.trimStart() }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let copy = { ...playersForm };
        copy.playerOne = copy.playerOne.trim();
        copy.playerTwo = copy.playerTwo.trim();

        setPlayerNames({...copy});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor={Players.playerOne}>Enter first player name:</label>
                <input name={Players.playerOne}
                    onChange={handleChange}
                    value={playersForm[Players.playerOne]}
                    placeholder="Player 1 name"
                    required
                    ></input>
            </div>
            <div>
                <label htmlFor={Players.playerTwo}>Enter second player name:</label>
                <input name={Players.playerTwo}
                    onChange={handleChange}
                    value={playersForm[Players.playerTwo]}
                    placeholder="Player 2 name"
                    required
                ></input>
            </div>
            <button type="submit">Play</button>
        </form>
    )
}

export default InitialScreen