"use client";
import React from "react";
import { useItemViewed } from "@app/client/store/vieweditems";
import ProductSlider from "./ProductSlider";
import FlashsalesTime from "./FlashsalesTime";
import { FaFire, FaShoppingBasket } from "react-icons/fa";
export default function ItemsViewed() {
  const { itemsViewed } = useItemViewed();
  return (
    <ProductSlider
      title="Your Recently"
      heading="Viewed Items"
      products={itemsViewed}
      Icon={FaShoppingBasket}
    />
  );
}
