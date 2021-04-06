import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import CellsProvider from './providers/cells';
import DiceProvider from './providers/dice';
import PlayersProvider from "./providers/players";

const App = () => {
    return (
        <PlayersProvider>
            <CellsProvider>
                <DiceProvider>
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
                </DiceProvider>
            </CellsProvider>
        </PlayersProvider>
    )
};

export default App;