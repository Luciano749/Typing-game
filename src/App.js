import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Reset.css";
import HomePage from "./components/HomePage/HomePage";
import GamePage from "./components/GamePage/GamePage";

import ModalProvider from "./contexts/ModalContext";
import RandomWordsProvider from "./contexts/RandomWordsContext";

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <RandomWordsProvider>
          <Router>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/game" exact component={GamePage} />
            </Switch>
          </Router>
        </RandomWordsProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
