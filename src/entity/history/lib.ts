import { Weather } from "entity/weather";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IHistoryStore {
  history: Weather[];
  addToHistory: (weather: Weather) => void;
  removeFromHistory: (id: string) => void;
  clearHistory: () => void;
}

export const useHistoryStore = create<IHistoryStore>()(
  persist(
    (set, get) => ({
      history: [],
      addToHistory: (weather) =>
        set((state) => ({ history: [...state.history, weather] })),
      removeFromHistory: (id) =>
        set((state) => ({
          history: state.history.filter((w) => w._id !== id),
        })),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "history",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
