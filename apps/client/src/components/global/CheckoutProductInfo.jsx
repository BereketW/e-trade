"use client";
import React from "react";
import { useCart } from "@app/client/store/cart";
import CurrencyFormat from "./currencyFormater";
export default function CheckoutProductInfo() {
  const { cartProducts } = useCart();
  const subTotalPrice = cartProducts
    .map((product) => product.totalPrice)
    .reduce((prev, curr) => prev + curr);

  if (!cartProducts.length > 0) return;
  return (
    <div className="bg-product-bg  w-full p-10">
      {/* <button
        type="button"
        className="group flex relative text-white text-base overflow-hidden hover:self-stretch self-start bg-black  py-4 font-medium"
      >
        <small className=" px-4 text-xl font-bold">&larr;</small>
        <span className=" w-0 h-0 overflow-hidden group-hover:w-full group-hover:h-full group-hover:overflow-visible ">
          Return to cart
        </span>
      </button> */}
      <h1 className="text-xl mb-4">Your Order</h1>
      <div className="bg-white px-8 py-4">
        <div className="flex justify-between text-2xl  border-b py-4 border-gray-300">
          <h1>Products</h1>
          <h1>Subtotal</h1>
        </div>
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-between border-b py-4 border-gray-300"
          >
            <h1 className="flex gap-3 items-center">
              <img className="w-8 h-8" src={`${product.imageUrl}`} />
              {product.name.slice(0, 35)}
            </h1>
            <CurrencyFormat amount={product.totalPrice} />
          </div>
        ))}
        <div className="flex justify-between text-2xl py-4 font-bold">
          <h1>Total</h1>
          <CurrencyFormat amount={subTotalPrice} />
        </div>
      </div>
    </div>
  );
}
