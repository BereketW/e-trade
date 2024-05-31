import React from "react";

export default function CategoryOption({ onChange, categories }) {
  return (
    <div>
      <select
        onChange={onChange}
        name=""
        id=""
        className="w-full text-sm p-3 mb-9  border-color-light text-color-body rounded-md border focus:border-0 active:border-0"
      >
        <option disabled>Choose Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}
