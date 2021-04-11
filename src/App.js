import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Game from "./components/Game";
import InitialScreen from "./components/InitialScreen";
import Message from "./components/Message";

import PlayerNamesProvider from "./providers/playerNames";
import MessageProvider from "./providers/message";

const App = () => {
  return (
    <MessageProvider>
      <PlayerNamesProvider>
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
      </PlayerNamesProvider>
    </MessageProvider>
  );
};

export default App;
