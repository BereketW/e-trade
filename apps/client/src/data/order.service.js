"use server";
import { redirect } from "next/navigation";
import fetcher from "./fetcher";

export async function createOrder(data) {
  try {
    const res = await fetcher.post("/orders", data, {
      headers: { "Content-Type": "application/json" },
    });
    const checkoutUrl = res.data.data.checkout_url;
    return { success: true, data: { checkout_url: checkoutUrl } };

    // return { success: true, data: res.data };
  } catch (error) {
    return { success: false, data: error };
  }
}
export async function getManyOrders({ page = 1, limit = 10 }) {
  try {
    const res = await fetcher.get(`/orders/page=${page}&limit=${limit}`);
    return { orders: res.data.orders, totalPages: res.data.totalPages };
  } catch (error) {
    return { success: false, data: error };
  }
}
export async function getOneOrder(id) {
  const res = await fetcher.get(`/orders/${id}`);
  return res.data;
}
