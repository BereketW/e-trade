import { create } from "zustand";

export const useCount = create((set) => ({
  count: 1,

  addCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  minusCount: () =>
    set((state) => ({
      count: state.count > 0 ? state.count - 1 : state.count,
    })),
}));
