import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import CellsProvider from './providers/cells';
import CurrentPlayerProvider from './providers/currentPlayer';
import DiceProvider from './providers/dice';
import BetProvider from './providers/bets';
import PlayerPointsProvider from './providers/playerPoints';
import PlayersProvider from "./providers/players";

const App = () => {
    return (
        <PlayersProvider>
            <CurrentPlayerProvider>
                <CellsProvider>
                    <DiceProvider>
                        <BetProvider>
                            <PlayerPointsProvider>
                                <BrowserRouter>
                                    <Switch>
                                        <Route exact path="/login">
                                            <InitialScreen />
                                        </Route>
                                        <Route exact path="/play">
                                            <Game />
                                        </Route>
                                        <Redirect to="/play" />
                                    </Switch>
                                </BrowserRouter>
                            </PlayerPointsProvider>
                        </BetProvider>
                    </DiceProvider>
                </CellsProvider>
            </CurrentPlayerProvider>
        </PlayersProvider>
    )
};

export default App;