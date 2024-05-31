import React from "react";

export default function SelectPage({
  productsPerPage,
  handleProductsPerPageChange,
}) {
  return (
    <select
      value={productsPerPage}
      onChange={handleProductsPerPageChange}
      className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
    >
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
      <option value={40}>40</option>
      <option value={50}>50</option>
    </select>
  );
}
