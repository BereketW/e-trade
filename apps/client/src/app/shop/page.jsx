// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

import ProductCard from "@app/client/components/global/ProductCard";
// import { useSearchParams } from "next/navigation";

import Message from "@app/client/components/global/Message";

import Rating from "@app/client/components/global/Rating";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

import { getManyProducts } from "@app/client/data/products";
import { getManycategories } from "@app/client/data/categories";
export default async function WomenClothingCard({ searchParams }) {
  console.log(searchParams);
  // const parameter = useSearchParams();
  // const category = parameter.get("category");
  const { products } = await getManyProducts();
  console.log(products);
  console.log("Search Param", searchParams);

  // console.log(categories);
  return (
    <>
      <main className="px-16 my-10">
        {/* <h1>{searchParams}</h1> */}
        <h1 className="font-bold text-3xl mb-6">Explore Our Products</h1>
        <div className="grid grid-cols-4 gap-10">
          {products.map((product) => {
            // const itemExist = itemsViewed.find(
            //   (cart) => cart.id === product.category.id
            // );
            // isLoading && <Loader key={product.category.id} />;
            return (
              <ProductCard key={product.id} product={product}>
                <Rating rating={product?.rating ?? 0} />
              </ProductCard>
            );
          })}
        </div>
      </main>
      <Message />
    </>
  );
}
