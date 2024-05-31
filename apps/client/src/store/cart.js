import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define the store
export const useCart = create(
  persist(
    (set) => ({
      cartProducts: [],

      addToCart: (product, numb = 0) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));
          currentState.cartProducts.push({
            ...product,
            totalPrice: numb > 0 ? product.price * numb : product.price,
            amount: numb || 1,
          });

          return currentState;
        }),

      removeFromCart: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));
          currentState.cartProducts = currentState.cartProducts.filter(
            (product) => product.id !== id
          );

          return currentState;
        }),

      addProductAmount: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));
          currentState.cartProducts = currentState.cartProducts.map((product) =>
            product.id === id
              ? {
                  ...product,
                  amount: product.amount + 1,
                  totalPrice: product.price * (product.amount + 1),
                }
              : product
          );

          return currentState;
        }),

      minusProductAmount: (id) =>
        set((state) => {
          const currentState = JSON.parse(JSON.stringify(state));
          currentState.cartProducts = currentState.cartProducts.map((product) =>
            product.id === id && product.amount > 1
              ? {
                  ...product,
                  amount: product.amount - 1,
                  totalPrice: product.price * (product.amount - 1),
                }
              : product
          );

          return currentState;
        }),
    }),
    {
      name: "cart-products", // name of the item in the storage (must be unique)
    }
  )
);
