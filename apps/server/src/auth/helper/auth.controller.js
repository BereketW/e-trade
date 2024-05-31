import express from "express";
import { createUser } from "./auth.service";
import { asyncHandler } from "../../common/async-handler";


const authController = express.Router();

authController.post("/register", asyncHandler(async(req,res)=>{
  const data = req.body;
  const user = await createUser(data);
  return res.json(user);
}));

export default authController;