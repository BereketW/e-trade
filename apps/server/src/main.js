import cors from "cors";
import "dotenv/config";
import express from "express";
import authController from "./auth/auth.controller";
import { HttpException } from "./common/http-exception";
// import cloudinary from "./config/cloudinary";
// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { corsOptions } from "./config/cors-options";
import { exceptionHandler } from "./middlewares/exception-handler";
import productsController from "./products/products.controller";
import usersController from "./users/users.controller";
import categoriesController from "./categories/categories.controller";
import ordersController from "./orders/orders.controller";
// import { authGuard } from "./auth/auth.guard";
import billingAddressController from "./billingAddress/billing-address.controller";
import multer from "multer";
import orderItemsController from "./orderItems/orderItems.controller";
// import orderItemsController from "./orderItem/orderitems.controller";
// import { multer } from "multer";
// import { path } from "path";

const app = express();
// app.use(authGuard);
// app.use(cors(corsOptions));
app.use(
  cors({
    origin: "http://localhost:3000", // Your frontend URL
    methods: "GET,POST",
    allowedHeaders: "Content-Type,Authorization",
  })
);
app.use(express.json());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// const upload = multer({ storage: storage });
const upload = multer({ dest: "uploads/" });
console.log(upload);
// app.use("/uploads", express.static("uploads"));

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  return res.json({
    message: "Hello",
  });
});

app.use("/products", productsController);
app.use("/orders", ordersController);
app.use("/orderitems", orderItemsController);

app.use("/categories", categoriesController);
// app.use("/orderItems", orderItemsController);
app.use("/auth", authController);
app.use("/users", usersController);
app.use("/billingAddress", billingAddressController);

app.all("*", (req, res) => {
  throw new HttpException("Not Found", 404);
});

app.use(exceptionHandler);

app.listen(8000, () => {
  console.log("App is running at port: 8000");
});
export { upload };
