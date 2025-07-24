import React, { useState, type ReactNode } from "react";

import { GlobalContext } from "../../hooks/useGlobalContext";
import {
  LocalStorage,
  LocalStorageKeys,
} from "../../utils/helpers/localStorage";

export type GlobalState = {
  favoriteServer: string;
};

const defaultState: GlobalState = {
  favoriteServer: "",
};

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<GlobalState>({
    ...defaultState,
    favoriteServer: LocalStorage.get(LocalStorageKeys.FavoriteServer) || "",
  });

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
