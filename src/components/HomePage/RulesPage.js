import styles from "./RulesPage.module.css";

import { useState, useEffect } from "react";
import { useModalChange } from "../../contexts/ModalContext";

const RulesPage = () => {
  const [heightAndWidth, setHeightAndWidth] = useState(0);
  const { rulesGrowUp, setRulesGrowUp } = useModalChange(false);

  useEffect(() => {
    if (heightAndWidth < 100) {
      setTimeout(() => {
        setHeightAndWidth(heightAndWidth + 20);
      }, 100);
    }
  }, [heightAndWidth]);

  return (
    <div
      className={styles.rulesContainer}
      style={{
        bottom: 0,
        height: heightAndWidth + "%",
        width: heightAndWidth + "%",
        borderRadius: heightAndWidth === 100 ? 0 : 50 + "%",
      }}
    >
      {heightAndWidth === 100 ? (
        <div className={styles.rulesArea}>
          <button
            className={styles.closeButton}
            onClick={() => setRulesGrowUp(false)}
          >
            X
          </button>
          <div className={styles.rulesItem}>
            <h2>1.Type fast</h2>
            <p>you should try typing as fast as you can</p>
          </div>

          <div className={styles.rulesItem}>
            <h2>2.Get point</h2>
            <p>if you finish the sentence in time you get points</p>
          </div>

          <div className={styles.rulesItem}>
            <h2>3.Share your score</h2>
            <p>compare your scores with your friends</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default RulesPage;
