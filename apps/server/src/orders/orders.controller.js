import express from "express";
import request from "request";
import { authGuard } from "../auth/auth.guard";
import { asyncHandler } from "../common/async-handler";
import axios from "axios";
import {
  createOrder,
  deleteOrder,
  getManyOrders,
  getOneOrder,
  updateOrder,
} from "./orders.service";
import { createAddress as createBillingAddress } from "../billingAddress/billing-address.service";
import { Chapa } from "chapa-nodejs";

export const chapa = new Chapa({
  secretKey: process.env.CHAPA_SECRET_KEY,
});
// console.log(chapa);
const ordersController = express.Router();

ordersController.get(
  "/",
  // authGuard,
  asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const orders = await getManyOrders(parseInt(page), parseInt(limit));
    return res.json({ orders: orders.orders, totalPage: orders.totalPage });
  })
);

ordersController.get(
  // authGuard,
  "/checkout",
  asyncHandler(async (req, res) => {
    const { tx_ref } = req.query;
    let paymentStatus = "PENDING";
    console.log({ paymentStatus: paymentStatus });

    const config = {
      headers: {
        Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
      },
    };

    try {
      const response = await axios.get(
        `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
        config
      );
      console.log("Payment verification response:", response.data);

      if (
        response.data.status === "success" &&
        response.data.data.status === "success"
      ) {
        paymentStatus = "PAID";

        // Update the order status to "PAID"
        await updateOrder(tx_ref, { paymentStatus });

        // Respond to the client indicating that the payment was successful and the order was updated
        res.json({
          success: true,
          message:
            "Payment was successfully verified and order status updated to PAID",
        });
      } else {
        // Payment was not successful
        res
          .status(400)
          .json({ success: false, message: "Payment verification failed" });
      }
    } catch (error) {
      console.log("Payment verification failed:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while verifying payment",
      });
    }
  })
);

ordersController.post(
  "/",
  authGuard,
  asyncHandler(async (req, res) => {
    // console.log(chapa);
    const user = req.user;
    const data = req.body;
    // console.log(data);
    const tx_ref = await chapa.generateTransactionReference();
    // console.log(tx_ref);

    const billingAddress = await createBillingAddress({
      data: { ...data.billingDetails, userId: user.id },
    });

    console.log(billingAddress.id);

    const order = await createOrder({
      orderItems: data.orderItems,
      // totalPrice: data.totalPrice,
      paymentRef: tx_ref,
      userId: user.id,
      billingAddressId: billingAddress.id, // Ensure we're using the billing address ID
    });
    console.log(order);

    const options = {
      method: "POST",
      url: "https://api.chapa.co/v1/transaction/initialize",
      headers: {
        Authorization: "Bearer CHASECK_TEST-ezM09Ca9Gs3mzGaKGBdlAYG6BSSj3gqL",
        "Content-Type": "application/json",
      },
      data: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
        currency: "ETB",
        amount: order.totalPrice,
        tx_ref: tx_ref,
        callback_url: `http://localhost:8000/orders/checkout?tx_ref=${tx_ref}`,
        return_url: `http://localhost:3000?tx_ref=${tx_ref}`,
        customization: {
          title: "Payment",
          description: "I love online payments",
        },
      },
    };
    axios(options)
      .then((response) => {
        const info = response.data;
        if (info.status === "success" && info.data && info.data.checkout_url) {
          res.json({
            success: true,
            data: { checkout_url: info.data.checkout_url },
          });
        } else {
          res.status(response.status).json(info);
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
    // res.redirect("http://localhost");
  })
);

ordersController.get(
  "/:id",
  // authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await getOneOrder(id);
    return res.json(order);
  })
);

ordersController.put(
  "/:id",
  authGuard,
  // updateOrderPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const order = await updateOrder(id, data);
    return res.json(order);
  })
);

ordersController.delete(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await deleteOrder(id);
    return res.json(order);
  })
);

export default ordersController;

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
