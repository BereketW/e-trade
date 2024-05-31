"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import electronics from "../../../public/img/electronics.png";
import mencloth from "../../../public/img/mencloth.png";
import womencloth from "../../../public/img/womencloth.png";

const Carousel = () => {
  const images = [
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png",
    },

    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-7.png",
    },

    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-17.png",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-1.png",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-05.png",
    },
    {
      image:
        "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-46.png",
    },
  ];
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-center p-10   bg-[#F6F7FB] bg-cover overflowX-0">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="bg-center bg-cover ">
            <img src={image.image} alt="image" className="object-cover  h-80" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
