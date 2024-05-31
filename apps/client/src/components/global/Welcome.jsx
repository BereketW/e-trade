import React from "react";
import { useCartStore } from "@app/client/store/cart";
import Carousel from "./Carousel";
import { SiHomebridge } from "react-icons/si";

const Welcome = () => {
  return (
    <main className="w-full">
      <div
        className="relative"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="absolute  top-20 right-[14rem]">
          <p className="text-[#FF0003] font-semibold">
            <SiHomebridge size={20} className="text-[#FF0003]" />
            Don't Miss !
          </p>
          <p className=" w-full text-black font-bold text-5xl ">
            Let's Start Shopping Today
          </p>
          <div className="flex  top-[7rem] absolute gap-4  text-gray-600 ">
            <div className="flex items-center p-6 w-20 h-20 font-semibold text-md flex-col rounded-full  bg-white text-gray-600 justify-center">
              <p>0</p>
              <p>Day</p>
            </div>
            <div className="flex items-center p-6 w-20 h-20 font-semibold text-md flex-col rounded-full  bg-white text-gray-600 justify-center">
              <p>00</p>
              <p>Hrs</p>
            </div>
            <div className="flex items-center p-6 w-20 h-20 font-semibold text-md flex-col rounded-full  bg-white text-gray-600 justify-center">
              <p>00</p>
              <p>Min</p>
            </div>
            <div className="flex items-center p-6 w-20 h-20 font-semibold text-md flex-col rounded-full  bg-white text-gray-500 justify-center">
              <p>00</p>
              <p>Sec</p>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </main>
  );
};

export default Welcome;
