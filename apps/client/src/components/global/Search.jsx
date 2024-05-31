import React from "react";
import SearchProducts from "./SearchProducts";
import { getManyProducts } from "@app/client/data/products";

export default async function Search() {
  const products = await getManyProducts();
  return <SearchProducts products={products} />;
}
