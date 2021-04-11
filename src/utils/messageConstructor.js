export const constructLegEndMessage = (playerNames, legBetPoints, legRollPoints) => {
    const resultTable = (
        <table>
            <tr>
                <th>Player</th>
                <th>Leg bet points</th>
                <th>Leg roll points</th>
            </tr>
            <tr>
                <td>{playerNames.playerOne}</td>
                <td>{legBetPoints.playerOne}</td>
                <td>{legRollPoints.playerOne}</td>
            </tr>
            <tr>
                <td>{playerNames.playerTwo}</td>
                <td>{legBetPoints.playerTwo}</td>
                <td>{legRollPoints.playerTwo}</td>
            </tr>
        </table>
    )
    return {
        title: "Leg over!",
        content: resultTable
    }
}

export const constructRaceEndMessage = (playerNames, raceBetPoints) => {
    const resultTable = (
        <table>
            <tr>
                <th>Player</th>
                <th>Race bet points</th>
            </tr>
            <tr>
                <td>{playerNames.playerOne}</td>
                <td>{raceBetPoints.playerOne}</td>
            </tr>
            <tr>
                <td>{playerNames.playerTwo}</td>
                <td>{raceBetPoints.playerTwo}</td>
            </tr>
        </table>
    );
 
    return {
        title: "Race over!",
        content: resultTable
    }
}