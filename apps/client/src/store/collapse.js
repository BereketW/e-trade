import { create } from "zustand";

export const useCollapsed = create((set) => ({
  isCollapsed: false,

  setIsCollapsed: (status) => set({ isCollapsed: status }),
}));
