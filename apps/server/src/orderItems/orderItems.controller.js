import express from "express";
import request from "request";
import { authGuard } from "../auth/auth.guard";
import { asyncHandler } from "../common/async-handler";
import axios from "axios";
import { getManyOrderItems, getOneOrderItem } from "./orderItems.service";
import { createAddress as createBillingAddress } from "../billingAddress/billing-address.service";

// console.log(chapa);
const orderItemsController = express.Router();

orderItemsController.get(
  "/",
  // authGuard,
  asyncHandler(async (req, res) => {
    const orderItems = await getManyOrderItems();
    return res.json(orderItems);
  })
);

orderItemsController.get(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await getOneOrder(id);
    return res.json(order);
  })
);

orderItemsController.put(
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

orderItemsController.delete(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await deleteOrder(id);
    return res.json(order);
  })
);

export default orderItemsController;

function isValidURL(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
