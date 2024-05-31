import Orders from "@app/client/components/user/Orders";
import UserOrder from "@app/client/components/user/UserOrder";
import { getOneOrder } from "@app/client/data/order.service";
import { getOneProduct } from "@app/client/data/products";
// import { getOneProduct } from "@app/client/data/products";
import { getMe } from "@app/client/data/users";
import React from "react";

export default async function page() {
  const user = await getMe();
  const orders = await getOneOrder(user.id);

  console.log(orders);
  return (
    <div className="flex flex-col">
      <UserOrder orders={orders} />
    </div>
  );
}
