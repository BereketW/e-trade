import React from "react";
import { FaEdit } from "react-icons/fa";

export default function Addresses() {
  return (
    <div>
      <small>
        The following addresses will be used on the checkout page by default.
      </small>
      <div className="flex gap-20 mt-4">
        <div>
          <h1 className="py-4 border-b border-color-light font-bold text-xl flex justify-between items-center">
            Shipping Address
            <FaEdit className="text-color-body" />
          </h1>
          <div className="flex flex-col gap-2 text-sm mt-4 text-[#292930]">
            <span>Name: Dev Camp</span>
            <span>Email: devcamp@bootcamp.com</span>
            <span> Phone: 1234 567890</span>
            <div className="flex flex-col mt-2">
              <span>ASTU College</span>
              <span>Adama, Ethiopia</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="py-4 border-b border-color-light font-bold text-xl flex justify-between items-center">
            Billing Address
            <FaEdit className="text-color-body" />
          </h1>
          <div className="flex flex-col gap-2 text-sm mt-4 text-[#292930]">
            <span>Name: Dev Camp</span>
            <span>Email:: devcamp@bootcamp.com</span>
            <span> Phone: 1234 567890</span>
            <div className="flex flex-col mt-2">
              <span>ASTU College</span>
              <span>Adama, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
