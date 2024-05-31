import React from "react";
import { X, Delete } from "lucide-react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useCart } from "@app/client/store/cart";
import CountQuantity from "./CountQuantity";
import Rating from "./Rating";
export default function CartItem({ product }) {
  const { removeFromCart } = useCart();
  return (
    <div key={product.id} className="flex mb-5 relative items-center gap-4">
      <img className="w-20 h-20" src={product.images[0]?.url} alt="" />

      <div className="flex flex-col gap-1">
        <Rating rating={Math.ceil(product.rating) || 4} />
        <h6 className="text-sm">{product.name.slice(0, 20)}</h6>
        <small>${product.price}</small>
      </div>
      <button
        className="absolute top-0 right-3"
        onClick={() => removeFromCart(product.id)}
      >
        <RiDeleteBin6Line className="h-4 w-4 absolute -top-3 bg-white" />
      </button>
      <CountQuantity product={product} />
    </div>
  );
}
