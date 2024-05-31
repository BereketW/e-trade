import express from "express";
import { asyncHandler } from "../common/async-handler";
import {
  createProduct,
  deleteProduct,
  getManyProducts,
  getOneProduct,
  updateProduct,
} from "./products.service";
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import fs from "fs";
import path from "path";
import { log } from "console";

const generateFilename = (originalName) => {
  const ext = path.extname(originalName);

  return `product-${new Date().getUTCMilliseconds()}${ext}`;
};

// Define constants
// const UPLOAD_DIR = "uploads/images";
const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif"];

// // Ensure the upload directory exists
// if (!fs.existsSync(UPLOAD_DIR)) {
//   fs.mkdirSync(UPLOAD_DIR);
// }

// Multer storage configuration
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename = generateFilename(file.originalname);
    cb(null, filename);
  },
});

// Multer file filter
const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Please upload an image of type jpeg, png, or gif"), false);
  }
};

// Multer upload configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dvp8pddmz",
  api_key: "923656227925561",
  api_secret: "UfrVwGDFx_EEOk8cF6ZPosiOhfk",
});

const productsController = express.Router();

productsController.get(
  "/",
  asyncHandler(async (req, res) => {
    console.log(req.query);
    const { page = 1, limit = 10 } = req.query;
    const products = await getManyProducts(parseInt(page), parseInt(limit));

    res.json({ products: products.products, totalPages: products.totalPages });
  })
);

productsController.post(
  "/",
  upload.array("images"),
  asyncHandler(async (req, res) => {
    // let isLoading;
    // console.log(isLoading);
    const data = req.body;
    const pictureFiles = req.files;
    if (!pictureFiles || pictureFiles.length === 0) {
      return res.status(400).json({ message: "No picture attached!" });
    }
    try {
      const multiplePicturePromise = pictureFiles.map((picture) =>
        cloudinary.uploader.upload(picture.path)
      );
      const imageResponses = await Promise.all(multiplePicturePromise);
      const images = imageResponses.map((response) => ({
        url: response.secure_url,
      }));
      console.log(images);
      data.images = images;

      const product = await createProduct(data);
      // isLoading = false;
      console.log(product);
      return res.status(200).json(product);
    } catch (error) {
      console.error("Error uploading product:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while uploading the product." });
    }
  })
);

productsController.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await getOneProduct(id);
    return res.json(product);
  })
);

productsController.put(
  "/:id",
  asyncHandler(async (req, res) => {
    const data = req.body;
    const { id } = req.params;
    const product = await updateProduct(id, data);
    return res.json(product);
  })
);

productsController.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const product = await deleteProduct(id);
    return res.json(product);
  })
);

export default productsController;
