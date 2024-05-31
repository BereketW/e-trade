"use client";
import React from "react";
import CheckoutForm from "./CheckoutForm";
import CheckoutProductInfo from "./CheckoutProductInfo";
import { useCart } from "@app/client/store/cart";

export default function Checkout() {
  const { cartProducts } = useCart();
  if (!cartProducts.length > 0) return;
  return (
    <div className="flex  gap-10 w-full px-36 pt-14 items-start">
      <CheckoutForm />
      <CheckoutProductInfo />
    </div>
  );
}
