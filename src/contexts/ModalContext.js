import { useState, createContext, useContext } from "react";

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [rulesGrowUp, setRulesGrowUp] = useState(false);

  return (
    <ModalContext.Provider value={{ rulesGrowUp, setRulesGrowUp }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalChange() {
  const context = useContext(ModalContext);
  const { rulesGrowUp, setRulesGrowUp } = context;
  return { rulesGrowUp, setRulesGrowUp };
}
