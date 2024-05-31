import React from "react";

import Rating from "./Rating";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2, BsCart3 } from "react-icons/bs";
import { useCart } from "@app/client/store/cart";
import { useWishlist } from "@app/client/store/wishlist";
export default function CartItem({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  return (
    <div
      key={product.id}
      className="flex mb-5 relative justify-between gap-4 w-full border border-color-light shadow-sm p-6 rounded"
    >
      <div className="flex gap-10">
        <img className="w-20 h-20" src={`${product.image}`} alt="" />
        <div className="flex flex-col gap-1">
          <Rating rating={Math.ceil(product.rating.rate) || 4} />
          <h6 className="text-sm text-color-body">
            {product.title.slice(0, 20)}
          </h6>
          <small>${product.price}</small>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-color-body">
        {/* <button onClick={addToCart(product)}> */}
        <BsCart3
          size={30}
          // onClick={addToCart(product)}
          className="cursor-pointer"
        />
        {/* </button> */}
        {/* <button onClick={addToWishlist(product)}> */}
        <MdFavoriteBorder
          size={30}
          // onClick={addToWishlist(product)}
          className="cursor-pointer"
        />
        {/* </button> */}
      </div>
    </div>
  );
}
