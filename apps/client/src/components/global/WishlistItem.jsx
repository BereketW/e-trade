"use client";
import { useWishlist } from "@app/client/store/wishlist";
import { X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import CurrencyFormat from "./currencyFormater";

export default function WishlistItem({ item }) {
  const { removeFromWishlist } = useWishlist();

  return (
    <div className="grid  grid-cols-4 place-items-center p-4 border-b border-gray-300 border- text-xl font-medium">
      <div className="flex items-center relative  gap-6  p-3.5">
        <Link
          className="border-2 p-1 absolute bg-white top-0 left-0 rounded-full"
          href={""}
          onClick={() => removeFromWishlist(item.id)}
        >
          <X />
        </Link>
        <img src={item.image} className="w-20 h-20" />
        {item?.name.slice(0, 20)}
      </div>
      <h1 className="text-custom-gray ">
        <CurrencyFormat amount={item.price} />
      </h1>
      <span className="text-custom-gray ">In Stock</span>
      <Button>Add to Cart</Button>
    </div>
  );
}
