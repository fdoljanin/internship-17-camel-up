import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import PlayersProvider from "./providers/players";

const App = () => {
    return (
    <PlayersProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <InitialScreen />
                </Route>
                <Route exact path="/play">
                    <Game />
                </Route>
                <Redirect to="/play"/>
            </Switch>
        </BrowserRouter>
    </PlayersProvider>
    )
};

export default App;