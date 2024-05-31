import { create } from "zustand";

export const useWishlist = create((set) => ({
  wishlist: [],

  addToWishlist: (product) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));
      currentState.wishlist.push({
        ...product,
        unitPrice: product.price,
      });

      return currentState;
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const currentState = JSON.parse(JSON.stringify(state));

      currentState.wishlist = currentState.wishlist.filter(
        (product) => product.id !== id
      );

      return currentState;
    }),
}));
