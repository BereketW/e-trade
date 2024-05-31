"use client";
import React from "react";
export default function Message() {
  return (
    <div className="flex justify-between mt-10 px-16">
      <div className="flex gap-4 items-center">
        <img
          className="w-11 h-10"
          src={`https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service1.png`}
          alt=""
        />
        <div>
          <h6 className="text-base font-bold">Fast & Secure Delivery</h6>
          <p>Tell about your service.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img
          className="w-11 h-10"
          src={`https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service2.png`}
          alt=""
        />
        <div>
          <h6 className="text-base font-bold">Money Back Guarantee</h6>
          <p>Within 10 days.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img
          className="w-11 h-10"
          src={`https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service3.png`}
          alt=""
        />
        <div>
          <h6 className="text-base font-bold">24 Hour Return Policy</h6>
          <p>No question ask.</p>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <img
          className="w-11 h-10"
          src={`https://new.axilthemes.com/demo/template/etrade/assets/images/icons/service4.png`}
          alt=""
        />
        <div>
          <h6 className="text-base font-bold">Pro Quality Support</h6>
          <p> 24/7 Live support.</p>
        </div>
      </div>
    </div>
  );
}
