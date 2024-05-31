import express from "express";
import { createCategoryPipe, updateCategoryPipe } from "./categories.pipe";
import {
  createCategory,
  deleteCategory,
  getManyCategories,
  getOneCategory,
  updateCategory,
} from "./categories.service";
import multer from "multer";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { asyncHandler } from "../common/async-handler";

const generateFilename = (originalName) => {
  const ext = path.extname(originalName);
  return `category-${new Date().getUTCMilliseconds()}${ext}`;
};

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/gif"];

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const filename = generateFilename(file.originalname);
    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Please upload an image of type jpeg, png, or gif"), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

cloudinary.config({
  cloud_name: "dvp8pddmz",
  api_key: "923656227925561",
  api_secret: "UfrVwGDFx_EEOk8cF6ZPosiOhfk",
});

const categoriesController = express.Router();

categoriesController.post(
  "/",
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const data = req.body;
    const pictureFile = req.file;

    if (!pictureFile) {
      return res.status(400).json({ message: "No picture attached!" });
    }

    try {
      const imageResponse = await cloudinary.uploader.upload(pictureFile.path);
      data.image = { url: imageResponse.secure_url };

      const category = await createCategory(data);
      return res.status(200).json(category);
    } catch (error) {
      console.error("Error uploading category:", error);
      return res
        .status(500)
        .json({ message: "An error occurred while uploading the category." });
    }
  })
);
// const categoriesController = express.Router();

categoriesController.get("/", async (req, res) => {
  const categories = await getManyCategories();
  return res.json(categories);
});

categoriesController.post("/", async (req, res) => {
  const data = req.body;
  const category = await createCategory(data);
  return res.json(category);
});

categoriesController.get("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await getOneCategory(id);
  return res.json(category);
});

categoriesController.put("/:id", updateCategoryPipe, async (req, res) => {
  const data = req.body;
  const { id } = req.params;
  const category = await updateCategory(id, data);
  return res.json(category);
});

categoriesController.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const category = await deleteCategory(id);
  return res.json(category);
});

export default categoriesController;
