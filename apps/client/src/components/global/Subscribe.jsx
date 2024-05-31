"use client";
import React from "react";
import { FaAddressCard, FaNewspaper } from "react-icons/fa";

export default function Subscribe() {
  return (
    <div className="px-16">
      <div className="p-28 bg-newsletter bg-cover bg-center bg-no-repeat  mt-10">
        <small className="text-color-primary flex items-center gap-3 font-bold text-base mb-5">
          <span className="bg-color-primary p-2 rounded-full">
            <FaNewspaper color="white" />
          </span>
          Newsletter
        </small>
        <h1 className="font-bold text-3xl mb-6">Get Weekly Update</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <FaAddressCard className="absolute left-7 top-1/2 text-gray-400 -translate-y-1/2" />
            <input type="text" className=" bg-white py-4 px-14 rounded" />
          </div>
          <button className="bg-black px-7 py-4 text-white rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
