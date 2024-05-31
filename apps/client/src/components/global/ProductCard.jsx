"use client";
import { useCart } from "@app/client/store/cart";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Rating from "./Rating";
import { MdFavoriteBorder } from "react-icons/md";
import { useWishlist } from "@app/client/store/wishlist";
import CurrencyFormat from "./currencyFormater";
import Link from "next/link";
// import { BsCart2 } from "react-icons/bs";
// import { getOneProduct } from "@app/client/data/products";

export default function ProductCard({ product, children }) {
  const { addToCart, cartProducts } = useCart();
  const { addToWishlist, wishlist } = useWishlist();
  const wishlistExist = wishlist.find((cart) => cart.id === product.id);
  const exist = cartProducts.find((cart) => cart.id === product.id);

  function handleAddToCart(product, e) {
    e.stopPropagation();
    if (!exist) {
      addToCart(product);
    }
  }

  function handleAddToWishList(product, e) {
    e.stopPropagation();
    if (!wishlistExist) {
      addToWishlist(product);
    }
  }

  return (
    <div className="group flex flex-col border rounded-xl p-4 transition-all cursor-pointer">
      <div className="h-52 relative overflow-hidden w-full self-center transition-all ease-in-out mb-3">
        <div className="p-4">
          {product.images[0].url ? (
            <Link href={`shop/${product.id}`}>
              <img
                src={product.images[0].url}
                alt="image"
                className="scale-110 group-hover:scale-125 transition-all ease-in-out duration-300 w-full object-contain h-36"
              />
            </Link>
          ) : (
            <div className=" flex items-center justify-center h-36">
              <Skeleton width={200} height={144} />
            </div>
          )}
        </div>
        <div className="flex translate-y-16 transition-all duration-500 group-hover:translate-y-0 z-50 ease-in-out p-2 gap-4 items-center justify-center w-full absolute bottom-0 left-0">
          <div>
            <button
              className="flex items-center justify-center p-2 bg-white rounded-full"
              onClick={(e) => handleAddToWishList(product, e)}
            >
              <MdFavoriteBorder color={"#3577F0"} size={30} />
            </button>
          </div>
          <button
            className="inline-block z-50 px-5 py-2 bg-color-secondary rounded text-white text-sm"
            onClick={(e) => handleAddToCart(product, e)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div>
        <p className="text-sm">{product.name.slice(0, 25)}</p>
        {children}

        <p className="flex gap-4 font-bold">
          <span className="text-color-lightest line-through">
            {<CurrencyFormat amount={product.price + 10} /> || <Skeleton />}
          </span>
          {<CurrencyFormat amount={product.price} /> || <Skeleton />}
        </p>
      </div>
    </div>
  );
}
