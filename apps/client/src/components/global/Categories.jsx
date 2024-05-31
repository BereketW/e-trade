"use client";
import React from "react";
import Card from "./Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaTags } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoriesSlider from "./CategoriesSlider";

export default function Categories({ categories }) {
  return (
    <main className="w-full px-16 mt-10">
      <div className="">
        <span className="flex mb-4 items-center gap-1 text-color-secondary font-semibold text-lg">
          {" "}
          <div className="p-2 text-white bg-color-secondary rounded-full">
            <FaTags />
          </div>
          Categories
        </span>
        <h1 className="text-3xl font-semibold">Browse by Category</h1>
        {/* <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="m-4  h-full p-4 w-full"
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center  p-4"
            >
              <img src={`${img}`} className="h-16 " />
            </SwiperSlide>
          ))}
        </Swiper> */}

        {<Card categories={categories} /> || <Skeleton />}
      </div>
    </main>
  );
}
