"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaCoffee } from "react-icons/fa";
import SelectPage from "@app/client/components/admin/SelectPage";
import ProductsTable from "@app/client/components/admin/ProductsTable";
import PaginationButton from "@app/client/components/admin/PaginationButton";

import { getManyProducts } from "@app/client/data/products";

export default function Page() {
  const [products, setProducts] = useState([]);
  // const { data, error } = useSWR("http://localhost:8000/products", fetcher);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  // console.log(data);

  useEffect(() => {
    async function fetchProducts(page = 1, limit = 10) {
      const { products, totalPages } = await getManyProducts("", page, limit);
      console.log(products, totalPages);
      setProducts(products);
      setFilteredProducts(products);
      setTotalPages(totalPages);
    }

    fetchProducts(currentPage, productsPerPage);
  }, [currentPage, productsPerPage]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(
        (product) =>
          product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);
  console.log(products, totalPages);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing products per page
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl text-color-heading font-bold my-4">Products</h1>
        <div className="text-sm text-color-body flex items-center gap-3">
          <Link
            className="hover:text-color-primary transition-all ease-in-out duration-200"
            href={"/admin/dashboard"}
          >
            Dashboard
          </Link>
          <span>{">"}</span>
          <span className="text-color-lightest">Products</span>
        </div>
      </div>
      <div className="bg-white p-8 w-full">
        <p className="mb-4 flex text-sm items-center gap-3 text-color-body">
          <FaCoffee className="text-color-primary" />
          Tip search by Product ID: Each product is provided with a unique ID,
          which you can rely on to find the exact product you need.
        </p>
        <div className="flex w-full justify-between mb-8">
          <div className="flex gap-4">
            <SelectPage
              value={productsPerPage}
              handleProductsPerPageChange={handleProductsPerPageChange}
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
              />
              <CiSearch
                size={24}
                className="absolute top-1/2 -translate-y-1/2 right-4"
              />
            </div>
          </div>
          <Link
            href="/admin/addProduct"
            className="px-10 py-3.5 border rounded border-color-primary text-color-primary transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
          >
            + Add New
          </Link>
        </div>
        <div className="overflow-x-auto overflow-y-hidden w-full h-auto">
          <ProductsTable filteredProducts={filteredProducts} />
        </div>
        <PaginationButton
          onClick={handlePageChange}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
