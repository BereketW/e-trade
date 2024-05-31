import React from "react";
import { FaTrash } from "react-icons/fa";

export default function ProductsTable({ filteredProducts }) {
  return (
    <table className="table-auto w-screen  border-collapse">
      <thead className="p-8 mb-3">
        <tr className="bg-[#f6f8fbcc] rounded shadow">
          <th className="text-start px-4 py-2">Product</th>
          <th className="text-start px-4 py-2">Product ID</th>
          <th className="text-start px-4 py-2">Price</th>
          <th className="text-start px-4 py-2">Quantity</th>
          <th className="text-start px-4 py-2">Stock</th>
          <th className="text-start px-4 py-2">Start date</th>
          <th className="text-start px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <tr
            key={product.id}
            className="md:text-base sm:text-sm text-xs border-b p-3 odd:bg-[#f6f8fbcc] hover:bg-[#EDF1F5] transition-all ease-out duration-300"
          >
            <td className="px-4 mr-19 py-2 whitespace-nowrap font-bold flex items-center gap-2">
              <img
                src={product.images[0].url}
                className="w-14 h-14 rounded shadow"
                alt=""
              />
              {product.name.slice(0, 10)}..
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {product.id.slice(0, 15)}...
            </td>
            <td className="px-4 py-2 whitespace-nowrap">{product.price}</td>
            <td className="px-4 py-2 whitespace-nowrap">{product.quantity}</td>
            <td className="px-4 py-2 whitespace-nowrap">
              <span
                className={`ml-2 text-sm ${
                  product.stockStatus === "in stock"
                    ? "text-color-success border border-color-success "
                    : " text-red-600  bg-red-100 "
                }rounded font-medium py-0.5 px-2`}
              >
                {product.stockStatus}
              </span>
            </td>
            <td className="px-4 py-2 whitespace-nowrap">
              {product.createdAt.split("T")[0]}
            </td>
            <td className="px-4 py-2 whitespace-nowrap text-red-500">
              <button>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
