import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
            <Routes>
              <Route path="/" exact element={<HomePage />} />
              <Route path="/game" exact element={<GamePage />} />
            </Routes>
          </Router>
        </RandomWordsProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
