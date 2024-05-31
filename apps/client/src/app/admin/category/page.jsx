// import AddProduct from "@app/client/components/forms/addProduct";
import { getManyCategories } from "@app/client/data/categories";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default async function page() {
  const categories = await getManyCategories();
  console.log(categories);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">
          Category List
        </h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Product List</span>
        </div>
      </div>
      <div className="bg-white p-8 w-full">
        <div className="flex w-full justify-between  mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="border border-color-light  py-2.5  px-4 rounded-xl focus:outline-none "
            />
            <CiSearch
              size={24}
              className="absolute top-1/2 -translate-y-1/2 right-4"
            />
          </div>
          <Link
            href="/admin/addProduct"
            className="px-10 py-3.5 border rounded border-color-primary text-color-primary  transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
          >
            + Add New
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-screen border-collapse">
            <thead>
              <tr className="bg-[#f6f8fbcc] p-3 rounded">
                <th className="px-4 text-start py-2  ">Category</th>
                <th className="px-4 text-start py-2">Category ID</th>
                <th className="px-4 text-start py-2">Quantity</th>
                <th className="px-4 text-start py-2">Sale</th>
                <th className="px-4 text-start py-2">Start date</th>
                <th className="px-4 text-start py-2">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className=" p-3 hover:bg-[#EDF1F5] transition-all ease-out duration-300 odd:bg-[#f6f8fbcc]"
                >
                  <td className="px-4 text-start py-2 whitespace-nowrap flex items-center gap-3">
                    {" "}
                    <img
                      src={category.image}
                      alt=""
                      className="w-10 h-10 object-cover rounded-md"
                    />
                    {category.name}
                  </td>
                  <td className="px-4 text-sm text-start text-color-chart03 py-2 whitespace-nowrap">
                    #{category.id}
                  </td>
                  <td className="px-4 text-start py-2 whitespace-nowrap">
                    {category.products.length}
                  </td>
                  <td className="px-4 text-sm text-start py-2 whitespace-nowrap">
                    0
                  </td>
                  <td className="px-4 text-sm text-start py-2 whitespace-nowrap">
                    {category.createdAt}
                  </td>
                  <td className="text-sm px-4 text-start py-2 whitespace-nowrap">
                    Nothing
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
