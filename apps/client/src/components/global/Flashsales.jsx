"use client";
import { jewelery } from "@app/client/api/products";
import { FaFire } from "react-icons/fa";
import FlashsalesTime from "./FlashsalesTime";
import ProductSlider from "./ProductSlider";

export default function Flashsales({ products }) {
  return (
    <ProductSlider
      title="Today's"
      heading="Flash Sale's"
      products={products}
      Icon={<FaFire />}
    >
      <FlashsalesTime />
    </ProductSlider>
  );
}
