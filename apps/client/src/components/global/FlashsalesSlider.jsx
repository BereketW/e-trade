"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import ProductCard from "./ProductCard";
import Link from "next/link";
export default function FlashsalesSlider({ products }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);
  useEffect(function () {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      //add this
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background-color: white;
            background-position: center;
            background-size: 40px;
            background-repeat: no-repeat;
            padding: 8px 16px;
            border-radius: 100%;
            border: 2px solid black;
            color: red;
          }

          

          .swiper-button-next::after,
          .swiper-button-prev::after {
            content: "";
          }

          .swiper-pagination-bullet{
            width: 40px;
            height: 40px;
            background-color: red;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
  }, []);
  return (
    <div className="my-10 relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",

          "--swiper-pagination-color": "#fff",
          "--swiper-height": "5px",
          "--swiper-width": "5px",
          "--swiper-navigation-width": "5px",
          "--swiper-button-next-position": "absolute",
        }}
        ref={swiperRef}
        slidesPerView={5}
        spaceBetween={-20}
        freeMode={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {products.map((product, ind) => (
          <SwiperSlide key={product.id} className="m-10 w-1/2 h-1/2">
            <Link href={`/shop/${product.id}`} className="w-1/4">
              <ProductCard product={product}>
                {ind % 2 === 0 && (
                  <div className="absolute w-20  top-5 -right-5 bg-color-primary shadow-md rounded text-sm font-bold px-2 py-1 text-white">
                    <span>{Math.trunc(Math.random() * 100)}% OFF</span>
                  </div>
                )}
              </ProductCard>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
