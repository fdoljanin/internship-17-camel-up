import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import PlayersProvider from "./providers/players";
import MessageProvider from "./providers/message";
import Message from './components/Message';

const App = () => {
    return (
        <MessageProvider>
            <PlayersProvider>
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
                    <Message />
                </BrowserRouter>
            </PlayersProvider>
        </MessageProvider>
    )
};

export default App;