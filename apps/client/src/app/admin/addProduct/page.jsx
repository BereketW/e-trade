import AddProduct from "@app/client/components/forms/addProduct";
import { getManyCategories } from "@app/client/data/categories";
import React from "react";

export default async function page() {
  const categories = await getManyCategories();
  return (
    <div>
      <AddProduct categories={categories} />
    </div>
  );
}
