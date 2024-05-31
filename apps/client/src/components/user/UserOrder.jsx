import { getOneProduct } from "@app/client/data/products";
import Link from "next/link";
import React from "react";

export default async function Orders({ orders }) {
  if (!orders) {
    return (
      <div className="flex items-center flex-col gap-4 justify-center w-full">
        <h1 className="font-semibold text-xl text-color-light">
          You don't have any orders on your order list
        </h1>
        <Link
          href={"/shop"}
          className="px-6 py-3 bg-color-primary text-white rounded "
        >
          Shop Now
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="flex px-5 text-xl font-medium border-b-2 border-color-lighter items-center justify-between">
        <h1>Order</h1>
        <h1>Date</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>

      {orders.map((order) => {
        return (
          <div
            key={order.id}
            className="flex font-medium  p-5 border-b-2 border-color-lighter items-center justify-between text-sm"
          >
            <img src={``} className="w-10 h-10 text-color-chart03" />
            <h2>{order.createdAt}</h2>
            <h2>{order.paymentStatus}</h2>
            <h2 className="py-4">
              <Link
                href={""}
                className="py-2 px-5 text-base rounded border-black border"
              >
                View
              </Link>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
