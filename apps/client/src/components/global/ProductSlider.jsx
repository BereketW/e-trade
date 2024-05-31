"use client";
import React from "react";

import FlashsalesSlider from "./FlashsalesSlider";

export default function ProductSlider({
  children,
  products,
  icon,
  title = "",
  heading = "",
}) {
  return (
    <div className="mt-10 p-16">
      <div className="flex  justify-between ">
        <span className="flex items-center gap-2 text-light-primary">
          <span className="p-2 bg-light-primary rounded-full text-white">
            {icon}
          </span>
          {title}
        </span>
        {children}
      </div>
      <h1 className="text-3xl font-bold mt-4">{heading}</h1>
      <FlashsalesSlider products={products} />
    </div>
  );
}
