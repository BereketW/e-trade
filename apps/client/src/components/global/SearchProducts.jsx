"use client";

import Link from "next/link";
import { jewelery } from "@app/client/api/products";
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

import SearchedProductCard from "./SearchedProductCard";
import { CiSearch } from "react-icons/ci";

export default function SearchProducts() {
  const [searched, setSearched] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const searchFilter = jewelery.filter(
    (product) =>
      product.title.toLowerCase().includes(searched.toLowerCase()) ||
      product.description.toLowerCase().includes(searched.toLowerCase())
  );

  function handleSetSearched(e) {
    setSearched(e.target.value);
  }

  function handleResetSearch() {
    setSearched("");
  }

  function handleOpenChange(open) {
    if (!open) {
      handleResetSearch();
    }
    setIsOpen(open);
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <div className="flex relative" onClick={() => setIsOpen(true)}>
          <input
            type="text"
            placeholder="Looking for products?"
            className="border text-xs items-center border-slate-200 rounded-md py-3 px-10 shadow-md focus:outline-none focus:border-sky-400 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <CiSearch
            size={24}
            className="absolute pointer-events-none top-3 right-6"
          />
        </div>
      </SheetTrigger>
      <SheetContent side="top" className="p-8 overflow-scroll">
        <div className="flex relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border w-full items-center border-slate-200 rounded-md py-3 px-10 shadow-md focus:outline-none sm:text-sm"
            value={searched}
            onChange={handleSetSearched}
          />
          <CiSearch
            size={24}
            className="absolute pointer-events-none top-3 right-6"
          />
        </div>

        <div className="grid gap-4 py-4 mt-10">
          {searched ? (
            searchFilter.length > 0 ? (
              searchFilter.map((product) => (
                <Link key={product.id} href={`/shop/${product.id}`}>
                  <SearchedProductCard product={product} />
                </Link>
              ))
            ) : (
              <h1 className="flex items-center justify-center text-color-light font-bold text-2xl">
                No Results Found
              </h1>
            )
          ) : (
            <h1 className="flex items-center text-color-light justify-center font-bold text-2xl">
              Start typing to search
            </h1>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
