import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import CellsProvider from './providers/cells';
import CurrentPlayerProvider from './providers/currentPlayer';
import DiceProvider from './providers/dice';
import LegBetProvider from './providers/legbets';
import PlayerPointsProvider from './providers/playerPoints';
import PlayersProvider from "./providers/players";

const App = () => {
    return (
        <PlayersProvider>
            <CurrentPlayerProvider>
                <CellsProvider>
                    <DiceProvider>
                        <LegBetProvider>
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
                        </LegBetProvider>
                    </DiceProvider>
                </CellsProvider>
            </CurrentPlayerProvider>
        </PlayersProvider>
    )
};

export default App;