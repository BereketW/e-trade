"use client";

import React, { useState } from "react";
import { createProduct } from "@app/client/data/products";
import { FaCloud, FaRemoveFormat, FaTrash } from "react-icons/fa";
import CategoryOption from "./CategoryOption";
import Link from "next/link";

export default function AddProduct({ categories }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [stockStatus, setStockStatus] = useState("");
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    setError("");
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setImagePreviews((prevPreviews) =>
      prevPreviews.filter((_, i) => i !== index)
    );
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("categorySlug", categorySlug);
    formData.append("rating", rating);
    formData.append("stockStatus", stockStatus);
    formData.append("quantity", quantity);
    images.forEach((image) => {
      formData.append("images", image);
    });
    console.log(images);
    // images.forEach((image) => {
    //   formData.append("images", image);
    // });

    // for (let i = 0; i > images.length; i++) {
    //   formData.append("images", images[i]);
    // }

    try {
      const res = await createProduct(formData);
      if (res.error) {
        set(res.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">
          Add Product
        </h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          {">"}
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/products"}
          >
            Products
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Add Product</span>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold mb-4">General Information</h3>
          <div className=" flex flex-col">
            <label htmlFor="name">Product Name</label>
            <input
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              className=" text-sm focus:outline-0 active:border-0 my-2 py-3 px-7 border-color-light text-color-body rounded-md border"
            />
            <small className="text-color-body  mb-6">
              Do not exceed 20 characters when entering the product name.
            </small>
          </div>
          <div className="flex gap-4">
            <div className="relative w-full">
              <label htmlFor="price">Price</label>
              <input
                required
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                type="number"
                step="0.01"
                className="w-full text-sm py-3 focus:outline-0 active:border-0 mb-9 px-7 border-color-light text-color-body rounded-md border"
              />
            </div>
            <div className="relative w-full">
              <label htmlFor="rating">Rating</label>
              <input
                required
                onChange={(e) => setRating(e.target.value)}
                name="rating"
                type="number"
                step="0.1"
                className="w-full text-sm focus:outline-0 active:border-0 py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
              />
            </div>
          </div>
          <div className="relative">
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="w-full text-sm py-3 focus:outline-0 active:border-0 mb-6 px-7 border-color-light text-color-body rounded-md border"
            />
          </div>
          <div className="relative w-full">
            <CategoryOption
              categories={categories}
              onChange={(e) => setCategorySlug(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between rounded">
          <div className="">
            <div className="relative w-full">
              <h3 className="font-bold mb-4">Image Upload</h3>
              <div className="grid grid-cols-2">
                <div className="w-[200px] relative h-[100px] border-dashed border rounded border-[#2275fc] flex flex-col items-center cursor-pointer justify-center">
                  <div className=" flex flex-col items-center justify-center">
                    <FaCloud className="text-[#2275fc] text-center" />
                    <small className="w-full h-full text-[#2275fc]">
                      Click here to browse
                    </small>
                  </div>
                  <input
                    required
                    onChange={handleImageUpload}
                    name="images"
                    type="file"
                    multiple={true}
                    className="w-full opacity-0 absolute inset-0  text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
                  />
                </div>
                {images.length > 0 && (
                  <div>
                    <img
                      src={imagePreviews[0]}
                      alt=""
                      className="w-[200px] h-[100px] object-cover object-center"
                    />
                  </div>
                )}
              </div>
            </div>
            {images.length < 4 && (
              <p className="my-4 text-sm text-color-body">
                You need to add at least 4 images. Pay attention to the quality
                of the pictures you add, comply with the background color
                standards. Pictures must be in certain dimensions. Notice that
                the product shows all the details
              </p>
            )}
            <div className="grid grid-cols-4 gap-4 mt-6 ">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative">
                  <img src={preview} alt="Preview" className="w-20 h-20" />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="cursor-pointer rounded-full border absolute -top-2 right-3 p-2 shadow-md "
                  >
                    <FaTrash size={10} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-3 items-center">
            <div className="w-2/3">
              <label htmlFor="rating">Quantity</label>
              <input
                required
                onChange={(e) => setQuantity(e.target.value)}
                name="rating"
                type="number"
                step="0.1"
                className="w-full text-sm focus:outline-0 active:border-0 py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
              />
            </div>
            <div>
              <label htmlFor="stockStatus">Stock Status</label>
              <select
                name="stockStatus"
                onChange={(e) => setStockStatus(e.target.value)}
                id=""
                className="w-full text-sm focus:outline-0 active:border-0 py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
              >
                <option disabled value="out of stock">
                  Stock Statusk
                </option>
                <option value="out of stock">Out Of Stock</option>
                <option value="in stock">In Stock</option>
              </select>
            </div>
          </div>
          <div className="self-start justify-self-start">
            <button
              type="submit"
              disabled={isLoading}
              className="rounded-md text-color-white px-8 py-2 mt-4  bg-color-primary"
            >
              {isLoading ? "Adding...." : "Add Product"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
