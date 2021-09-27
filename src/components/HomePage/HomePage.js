import styles from "./View1.module.css";
import RulesPage from "./RulesPage";

import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { useModalChange } from "../../contexts/ModalContext";

const View1 = () => {
  const { rulesGrowUp, setRulesGrowUp } = useModalChange(false);

  return (
    <div className={styles.view1Container}>
      {rulesGrowUp ? <RulesPage /> : null}

      <h1 className={styles.welcomeTitle}>WELCOME TO THE TYPING GAME</h1>

      <div className={styles.typeWriterDiv}>
        <Typewriter
          options={{
            strings: ["Typing..."],
            autoStart: true,
            loop: true,
          }}
          wrapperClassName={styles.typewritera}
        />
      </div>

      <div className={styles.buttonsArea}>
        <Link to="/game" className={styles.startGameButton}>
          START
        </Link>
        <button
          className={styles.goToGameRules}
          onClick={() => setRulesGrowUp(true)}
        >
          rules
          <span className={styles.arrow}>^</span>
        </button>
      </div>
    </div>
  );
};

export default View1;
