"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const userReview = [
  {
    name: "Firomsa Hika",
    avatar: "https://avatars.githubusercontent.com/u/116643596?v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",
    role: "Head of Idea",
  },
  {
    name: "Fitsum Tesfaye",
    avatar: "https://avatars.githubusercontent.com/u/135918799?v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",

    role: "Head of Idea",
  },
  {
    name: "Bereket Wolde",
    avatar:
      "https://avatars.githubusercontent.com/u/163511853?s=400&u=8ae169ec92ac6769555a2ad52c74315ee2e37075&v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",

    role: "Head of Idea",
  },
  {
    name: "Firomsa Hika",
    avatar: "https://avatars.githubusercontent.com/u/116643596?v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",
    role: "Head of Idea",
  },
  {
    name: "Fitsum Tesfaye",
    avatar: "https://avatars.githubusercontent.com/u/135918799?v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",

    role: "Head of Idea",
  },
  {
    name: "Bereket Wolde",
    avatar:
      "https://avatars.githubusercontent.com/u/163511853?s=400&u=8ae169ec92ac6769555a2ad52c74315ee2e37075&v=4",
    review:
      "It’s amazing how much easier it has been to meet new people and create instantly non connections. I have the exact same personal the only thing that has changed is my mind set and a few behaviors",

    role: "Head of Idea",
  },
];
export default function Feedback() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg-[#f9f3f0] px-16">
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",

          "--swiper-pagination-color": "#fff",
          "--swiper-height": "5px",
          "--swiper-width": "5px",
          "--swiper-navigation-width": "5px",
        }}
        loop={true}
        slidesPerView={3}
        onAutoplay={true}
        spaceBetween={-100}
        freeMode={true}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=""
      >
        {userReview.map((reviewItem, ind) => (
          <SwiperSlide key={reviewItem.name}>
            <div className={`py-10 px-16 ${ind % 2 === 0 && "mt-3"}`}>
              <FeedbackMessage reviewItem={reviewItem} />
              <UserDetail reviewItem={reviewItem} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function UserDetail({ reviewItem }) {
  return (
    <div className="flex mt-5 gap-3">
      <img
        src={`${reviewItem.avatar}`}
        alt="Firomsa"
        className="w-16 h-16 rounded-full"
      />

      <div className="flex flex-col  justify-center">
        <span className="text-sm text-[#777777]">{reviewItem.role}</span>
        <h1 className="text-lg font-medium">{reviewItem.name}</h1>
      </div>
    </div>
  );
}

function FeedbackMessage({ reviewItem }) {
  return (
    <div className="bg-[#f9f3f0] shadow-sm">
      <div className="bg-white relative  text-color-heading p-10 rounded">
        <p>“{reviewItem.review} “</p>
        <div className=" absolute -bottom-6 left-24 border-t-[25px] border-t-white border-r-[50px] border-r-transparent"></div>
      </div>
    </div>
  );
}
