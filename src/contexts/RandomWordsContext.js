import { useState, createContext, useContext } from "react";

const RandomWordsContext = createContext();

export default function RandomWordsProvider({ children }) {
  const [randomWordsList, setRandomWordsList] = useState([]);

  return (
    <RandomWordsContext.Provider
      value={{ randomWordsList, setRandomWordsList }}
    >
      {children}
    </RandomWordsContext.Provider>
  );
}

export function useRandomWords() {
  const context = useContext(RandomWordsContext);
  const { randomWordsList, setRandomWordsList } = context;
  return { randomWordsList, setRandomWordsList };
}
