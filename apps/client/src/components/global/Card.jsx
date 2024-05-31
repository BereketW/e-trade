"use client";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@app/client/lib/utils";

import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// const categories = [
//   {
//     id: 5,
//     slug: "jwellery",
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
//   },
//   {
//     id: 9,
//     slug: "electronics",
//     title: " Portable External Hard Drive - USB 3.0 ",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
//   },
//   {
//     id: 1,
//     slug: "mens-clothing",
//     title: "Denim Jacket",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
//   },
//   {
//     id: 15,
//     slug: "women-clothing",
//     title: "Women's stylish hat",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
//   },

//   {
//     id: 5,
//     slug: "jwellery",
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
//   },
//   {
//     id: 9,
//     slug: "electronics",
//     title: " Portable External Hard Drive - USB 3.0 ",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
//   },
//   {
//     id: 1,
//     slug: "mens-clothing",
//     title: "Denim Jacket",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
//   },
//   {
//     id: 15,
//     slug: "women-clothing",
//     title: "Women's stylish hat",
//     image:
//       "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
//   },
// ];

export default function Card({ categories }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="my-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",

          "--swiper-pagination-color": "#fff",
          "--swiper-height": "5px",
          "--swiper-width": "5px",
          "--swiper-navigation-width": "5px",
        }}
        slidesPerView={6}
        spaceBetween={-20}
        freeMode={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id} className="m-10 w-1/2 h-1/2">
            <Link href={`/shop?category=${category?.slug}`}>
              <div className=" h-11/12  border rounded-xl">
                <img
                  src={category?.image}
                  alt="image"
                  className="w-full h-40 object-cover rounded-t-xl"
                />

                <p className="py-2 text-center text-color-heading font-medium">
                  {category.name}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
