import { create } from "zustand";

export const useSelectedMenu = create((set) => ({
  selectedMenuItem: null,

  setSelectedMenuItem: (menu) => set({ selectedMenuItem: menu.key }),
}));
