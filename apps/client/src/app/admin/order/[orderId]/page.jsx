import CurrencyFormat from "@app/client/components/global/currencyFormater";
import { getOneOrder } from "@app/client/data/order.service";
import React from "react";

export default async function page({ params }) {
  const id = params.orderId;
  console.log("id", id);
  const order = await getOneOrder(id);
  console.log("order", order.orderItems[0]);

  return (
    <div>
      <h1 className="text-xl font-bold text-color-heading my-4">
        Order #{order.id}
      </h1>
      <div className="flex gap-5 items-start">
        <div className="bg-white rounded  shadow p-4">
          <h1 className="font-bold text-color-dark mb-4">All Items</h1>
          {order.orderItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 odd:bg-[#F7FAFC]  p-3 rounded hover:bg-[#EDF1F5] transition-all ease-in-out duration-200  items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.product.images[0].url}
                  alt=""
                  className="w-14 h-14 rounded"
                />
                <div>
                  <h1 className="text-xs text-color-body">Product Name</h1>
                  <h1 className="font-semibold text-sm text-color-heading">
                    {item.product.name.slice(0, 19)}
                  </h1>
                </div>
              </div>
              <div>
                <h1 className="text-xs text-color-body">Quantity</h1>
                <h1 className="font-semibold text-sm text-color-heading">
                  {item.quantity}
                </h1>
              </div>
              <div>
                <h1 className="text-xs text-color-body">Price</h1>
                <h1 className="font-semibold text-sm text-color-heading">
                  <CurrencyFormat amount={item.product.price} />
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-white p-4 shadow rounded">
            <h1 className="text-color-dark font-bold mb-4">Summary</h1>
            <h1 className="text-color-body text-sm flex items-center gap-4">
              Order ID{" "}
              <span className="font-semibold text-base text-color-heading">
                #{order.id}
              </span>
            </h1>
            <h1 className="text-color-body text-sm flex items-center gap-4">
              Date{" "}
              <span className="font-semibold text-base text-color-heading">
                {order.createdAt.split("T")[0]}
              </span>
            </h1>
            <h1 className="text-color-body text-sm flex items-center gap-4">
              Total{" "}
              <span className="font-semibold text-base text-color-chart03">
                <CurrencyFormat amount={order.totalPrice} />
              </span>
            </h1>
          </div>
          <div className="bg-white rounded p-4 mt-4">
            <h1 className="text-color-dark font-bold mb-4">Shipping Addres</h1>
            <p className="text-color-body text-sm">
              {order.billingAddress?.address || ""}{" "}
              {order.billingAddress?.city || ""},{" "}
              {order.billingAddress?.country || ""}{" "}
              {order.billingAddress?.postalCode || ""}
            </p>
          </div>
          <div className="bg-white rounded p-4 mt-4">
            <h1 className="text-color-dark font-bold mb-4">Payment Method</h1>
            <div className="flex items-center gap-3">
              <img
                className="w-20 h-20 rounded shadow"
                src="https://yt3.googleusercontent.com/wIzzYkCpUfshJPTg97GDX96ZUVZ7TTKtIOuKD2il7Xa9fXaEopTZFFQnUAr_figuZXy7pzV555w=s900-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
