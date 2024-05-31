import { create } from "zustand";

export const useItemViewed = create((set) => ({
  itemsViewed: [],

  addToItems: (product, numb = 0) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      currentState.itemsViewed.push({
        ...product,
      });

      return currentState;
    }),
}));
