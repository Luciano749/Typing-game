import styles from "./GamePage.module.css";

import { useState, useEffect, useRef } from "react";
import { useRandomWords } from "../../contexts/RandomWordsContext";

const Game = () => {
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const { randomWordsList } = useRandomWords([]);
  const [timer, setTimer] = useState(getRndInteger(3, 4));
  const [score, setScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const intervalA = useRef();

  const [inputValue, setInputValue] = useState("");
  const wordToType = useRef(null);

  const [randomIndex, setRandomIndex] = useState(getRndInteger(0, 1500));

  useEffect(() => {
    if (timer > 0) {
      intervalA.current = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      if (inputValue === wordToType.current.innerText && wordToType.current) {
        setScore(score + 1);
        setInputValue("");

        setRandomIndex(getRndInteger(0, 1500));
        setTimer(getRndInteger(3, 4));
        setInputValue("");
      }

      if (inputValue !== wordToType.current.innerText) {
        setIsGameFinished(true);
      }
    }
  }, [timer, inputValue, randomIndex, score]);

  return (
    <>
      {isGameFinished ? (
        <div className={styles.gameEndView}>
          <>
            <h1>CONGRATULATIONS,</h1>
            <h1>YOU LOSE</h1>
          </>

          <h1 className={styles.score}>You got {score} points</h1>
          <button
            className={styles.reloadButton}
            onClick={() => window.location.reload()}
          >
            RESTART
          </button>
        </div>
      ) : (
        <div className={styles.gameArea}>
          <h1 ref={wordToType} className={styles.wordToType}>
            {randomWordsList[randomIndex]}
          </h1>
          <div className={styles.inputArea}>
            <input
              type="text"
              className={styles.typingInput}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <h1 className={styles.timer}>Timer:{timer}</h1>

          <h1 className={styles.scoreText}>Score:{score}</h1>
        </div>
      )}
    </>
  );
};

export default Game;
