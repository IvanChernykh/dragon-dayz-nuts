export enum LocalStorageKeys {
  FavoriteServer = "FavoriteServer",
}

export const LocalStorage = {
  get: <T>(key: LocalStorageKeys): T | undefined => {
    const raw = localStorage.getItem(key);

    if (!raw) {
      return undefined;
    }

    try {
      return JSON.parse(raw);
    } catch {
      return undefined;
    }
  },

  set: <T>(key: LocalStorageKeys, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove: (key: LocalStorageKeys): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
