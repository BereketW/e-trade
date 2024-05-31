"use client";
import React from "react";
import { useCart } from "@app/client/store/cart";
import { X } from "lucide-react";
import CurrencyFormat from "./currencyFormater";
import CountQuantity from "./CountQuantity";
import "./styles.css";
import Link from "next/link";

export default function ViewCart() {
  const { cartProducts, removeProductFromCart } = useCart();
  const totalPrice =
    cartProducts.lenght > 0 &&
    cartProducts
      .map((product) => product.totalPrice)
      .reduce((prev, next) => prev + next);

  return (
    <main className="mt-10 px-16 ">
      <span>
        Home / <span className="text-color-secondary font-medium">Carts</span>
      </span>

      <div className="mt-6">
        <h1 className="text-xl">Your Carts</h1>

        <div className="grid grid-full">
          <div>
            <div className="grid grid-cols-6 ">
              <h1>Photo</h1>
              <h1>Name</h1>
              <h1>Quantity</h1>
              <h1>Price</h1>
              <h1>Sub Total</h1>
              <h1></h1>
            </div>

            <div className="">
              {cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                  <div
                    key={product.id}
                    className="grid text-sm items-center grid-cols-6 col-start-1 col-  mx-auto p-4 border border-color-light"
                  >
                    <img src={product.imageUrl} alt="image" className="w-20" />
                    <p>{product.name.slice(0, 20)}</p>
                    <CountQuantity product={product} />
                    <p>
                      <CurrencyFormat amount={product.price} />
                    </p>
                    <p>
                      <CurrencyFormat amount={product.totalPrice} />
                    </p>

                    <button
                      className="p-3 justify-self-start rounded text-color-chart03 border border-color-chart03"
                      onClick={() => removeProductFromCart(product.id)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                ))
              ) : (
                <h1 className="flex items-center justify-center font-bold text-2xl ">
                  {" "}
                  Cart Empty
                </h1>
              )}
            </div>
          </div>
          <div className="bg-product-bg  p-10">
            <h1 className="text-xl mb-4">Your Order</h1>

            <div className="flex">
              <h1>Shipping</h1>
              <h1>Free</h1>
            </div>
            <div className="flex">
              <h1>Tax</h1>
              <p>0</p>
            </div>
            <div className="flex gap-10">
              <h1>Total</h1>
              <CurrencyFormat amount={totalPrice} />
            </div>
            <Link href="/checkout" className="p-2 bg-color-primary text-white">
              Proccess to checkout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
