"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search({ onChange, searchTerm }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search here..."
        value={searchTerm}
        onChange={() => onChange}
        className="border border-color-light py-2.5 px-4 rounded-xl focus:outline-none"
      />
      <CiSearch
        size={24}
        className="absolute top-1/2 -translate-y-1/2 right-4"
      />
    </div>
  );
}
