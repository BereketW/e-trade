import React from "react";

export default function Input({ name, label, onChange }) {
  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        onChange={onChange}
        className="border  rounded h-10 w-full focus:outline-none   p-8 mt-2 text-sm"
        placeholder=""
      />
      <label
        for="firstName "
        className="absolute peer top-0 left-0 h-4 text-slate-600 bg-white px-4 -translate-y-1 translate-x-3"
      >
        {label}
        {label !== "Apartment" && <span className="text-red-700">*</span>}
      </label>
    </div>
  );
}
