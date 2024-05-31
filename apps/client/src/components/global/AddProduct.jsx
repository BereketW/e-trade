"use client";

import Link from "next/link";
// import { jewelery } from "@app/client/api/products";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import React, { useState } from "react";
import { createProduct } from "@app/client/data/products";

// import SearchedProductCard from "./SearchedProductCard";
// import { CiSearch } from "react-icons/ci";

export default function AddProduct() {
  const [formState, setFormState] = useState({
    name: "",
    description: "",
    price: 0,
    categoryName: "",
    rating: 0,
  });
  const [images, setImages] = useState([]);
  const handleImageUpload = async (e) => {
    const files = e.target.files;
    setImages(files);
  };

  function onChange(e) {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: name === "price" || name === "rating" ? parseFloat(value) : value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formState.name);
    formData.append("description", formState.description);
    formData.append("price", formState.price);
    formData.append("categoryName", formState.categoryName);
    formData.append("rating", formState.rating);
    formData.append("images", images);
    const res = await createProduct(formData);
    console.log({ res });
    //   if (res?.status === 200) {
    //     router.push("/");
    //   } else {
    //     alert("Error creating product");
    //   }
  }

  return (
    <div className="">
      <div className="flex gap-10 relative w-full h-svh items-center">
        <div className="flex mt-16 items-center justify-center w-full">
          <div className="w-2/3">
            <form onSubmit={onSubmit} className="w-2/3">
              <h3 className="font-bold mb-3 text-2xl">General Information</h3>

              <div className="relative mt-10">
                <label
                  htmlFor="name"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Product Name
                </label>
                <input
                  name="name"
                  onChange={onChange}
                  type="text"
                  className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="description"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Description
                </label>
                <input
                  name="description"
                  onChange={onChange}
                  type="text"
                  className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="price"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Price
                </label>
                <input
                  onChange={onChange}
                  name="price"
                  type="number"
                  step="0.01"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="rating"
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Rating
                </label>
                <input
                  onChange={onChange}
                  name="rating"
                  type="number"
                  step="0.1"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="categoryName"
                  className="absolute focus:border-color-primary text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Category Name
                </label>
                <input
                  onChange={onChange}
                  name="categoryName"
                  type="text"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor="imageUrl"
                  className="absolute focus:border-color-primary text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Product Images
                </label>
                <input
                  onChange={onChange}
                  name="imageUrl"
                  type="text"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div>
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt="Preview"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      margin: "10px",
                    }}
                  />
                ))}
              </div>
              <div className="">
                <button className="rounded-md text-color-white px-8 py-2 bg-color-primary">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
