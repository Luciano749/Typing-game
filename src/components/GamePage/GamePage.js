import styles from "./GamePage.module.css";
import Game from "./Game";

import { useState, useEffect } from "react";

import { useRandomWords } from "../../contexts/RandomWordsContext";

const GamePage = () => {
  const [timerToStart, setTimerToStart] = useState(3);
  const { setRandomWordsList } = useRandomWords([]);

  useEffect(() => {
    if (timerToStart > 0) {
      setTimeout(() => {
        setTimerToStart(timerToStart - 1);
      }, 1000);
    }
  });

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word?number=1500")
      .then((response) => response.json())
      .then((response) => {
        setRandomWordsList(response);
      });
  }, [setRandomWordsList]);

  return (
    <div className="gameContainer">
      {timerToStart === 0 ? (
        <Game />
      ) : (
        <h1 className={styles.wordC}>{timerToStart}</h1>
      )}
    </div>
  );
};
export default GamePage;
