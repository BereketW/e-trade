import express from "express";
import { authGuard } from "../auth/auth.guard";
import { asyncHandler } from "../common/async-handler";
import { createAddressPipe, updateAddressPipe } from "./billing-address.pipe";
import {
  createAddress,
  deleteAddress,
  getManyBillingAddress,
  getOneAddress,
  updateAddress,
} from "./billing-address.service";

const billingAddressController = express.Router();

billingAddressController.get(
  "/",
  asyncHandler(async (req, res) => {
    const billingAddresses = await getManyBillingAddress();
    return res.json(billingAddresses);
  })
);

billingAddressController.post(
  "/",
  authGuard,
  // createAddressPipe,
  asyncHandler(async (req, res) => {
    const data = req.body;
    console.log(data);
    const address = await createAddress(data);
    return res.json(address);
  })
);

billingAddressController.get(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const address = await getOneAddress(id);
    return res.json(address);
  })
);

billingAddressController.put(
  "/:id",
  authGuard,
  // updateAddressPipe,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const address = await updateAddress(id, data);
    return res.json(address);
  })
);

billingAddressController.delete(
  "/:id",
  authGuard,
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    await deleteAddress(id);
    return res.status(204).send();
  })
);

export default billingAddressController;
