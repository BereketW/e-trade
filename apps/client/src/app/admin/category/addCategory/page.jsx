"use client";

import React, { useState } from "react";
import { createCategory } from "@app/client/data/categories"; // Ensure this function exists in your data fetching module
import { FaCloud, FaTrash } from "react-icons/fa";
import Link from "next/link";

export default function AddCategory() {
  const [imagePreview, setImagePreview] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleImageUpload = (e) => {
    setError("");
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview("");
  };

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    if (image) {
      formData.append("image", image);
    }
    console.log(formData);
    try {
      const res = await createCategory(formData);
      if (res.error) {
        setError(res.message);
      }
      console.log(error);
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
          Add Category
        </h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/category"}
          >
            Category
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Add Category</span>
        </div>
      </div>
      <form
        onSubmit={onSubmit}
        className="grid md:grid-cols-2 gap-10 items-start"
      >
        <div className="bg-white p-8 rounded">
          {error && <small className="text-color-chart03 mb-3">{error}</small>}
          <h3 className="font-bold mb-3 text-2xl">Category Information</h3>
          <div className="mt-10 flex flex-col">
            <label htmlFor="name">Category Name</label>
            <input
              required
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="text-sm focus:outline-0 active:border-0 my-2 py-3 px-7 border-color-light text-color-body rounded-md border"
            />
          </div>
          <div className="mt-6 flex flex-col">
            <label htmlFor="link">Category Link</label>
            <input
              required
              name="link"
              onChange={(e) => setSlug(e.target.value)}
              type="text"
              className="text-sm focus:outline-0 active:border-0 my-2 py-3 px-7 border-color-light text-color-body rounded-md border"
            />
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col justify-between rounded">
          <div className="">
            <h3 className="font-bold mb-3 text-2xl">Image Upload</h3>
            <div className="relative w-full">
              <div className="w-full relative h-[300px] border-dashed border rounded border-[#2275fc] flex flex-col items-center cursor-pointer justify-center">
                <div className="flex flex-col items-center justify-center">
                  <FaCloud className="text-[#2275fc] text-center" />
                  <small className="w-full h-full text-[#2275fc]">
                    Click here to browse
                  </small>
                </div>
                <input
                  required
                  onChange={handleImageUpload}
                  name="image"
                  type="file"
                  className="w-full opacity-0 absolute inset-0 text-sm py-3 mb-9 px-7 h-full border-color-light text-color-body rounded-md border"
                />
              </div>
              {image && (
                <div className="mt-4 relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-[200px] h-[100px] object-cover object-center"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="cursor-pointer rounded-full border absolute -top-2 right-3 p-2 shadow-md"
                  >
                    <FaTrash size={10} />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="self-start justify-self-start">
            <button
              type="submit"
              className="rounded-md text-color-white px-8 py-2 my-10 bg-color-primary"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
