import { createContext, useContext } from "react";

import type { GlobalState } from "../components/context/GlobalContext";

export type GlobalContext = {
  state: GlobalState;
  setState: React.Dispatch<React.SetStateAction<GlobalState>>;
};

export const GlobalContext = createContext<GlobalContext | undefined>(
  undefined
);

export const useGlobalContext = (): GlobalContext => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within GlobalProvider");
  }

  return context;
};
