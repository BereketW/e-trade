import Link from "next/link";
import React from "react";

export default function Orders({ orders }) {
  return (
    <div>
      <div className="flex px-5 text-xl font-medium border-b-2 border-color-lighter items-center justify-between">
        <h1>Order</h1>
        <h1>Date</h1>
        <h1>Status</h1>
        <h1>Action</h1>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex font-medium  p-5 border-b-2 border-color-lighter items-center justify-between text-sm"
        >
          <h2 className="text-color-chart03">#{order.id}</h2>
          <h2>{order.date}</h2>
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
      ))}
    </div>
  );
}
