export const constructLegEndMessage = (
  playerNames,
  legBetPoints,
  legRollPoints
) => {
  const resultTable = (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Leg bet points</th>
          <th>Leg roll points</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );

  return {
    title: "Leg over!",
    content: resultTable,
  };
};

export const constructRaceEndMessage = (playerNames, raceBetPoints) => {
  const resultTable = (
    <table>
      <thead>
        <tr>
          <th>Player</th>
          <th>Race bet points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{playerNames.playerOne}</td>
          <td>{raceBetPoints.playerOne}</td>
        </tr>
        <tr>
          <td>{playerNames.playerTwo}</td>
          <td>{raceBetPoints.playerTwo}</td>
        </tr>
      </tbody>
    </table>
  );

  return {
    title: "Race over!",
    content: resultTable,
  };
};
