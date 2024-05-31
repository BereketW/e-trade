import Link from "next/link";
import React from "react";
import Card from "./Card";

// import required modules

const categories = [
  {
    id: 5,
    slug: "jwellery",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    id: 9,
    slug: "electronics",
    title: " Portable External Hard Drive - USB 3.0 ",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
  },
  {
    id: 1,
    slug: "mens-clothing",
    title: "Denim Jacket",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
  },
  {
    id: 15,
    slug: "women-clothing",
    title: "Women's stylish hat",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
  },

  {
    id: 5,
    slug: "jwellery",
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/jewellery/product-4.png",
  },
  {
    id: 9,
    slug: "electronics",
    title: " Portable External Hard Drive - USB 3.0 ",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png",
  },
  {
    id: 1,
    slug: "mens-clothing",
    title: "Denim Jacket",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-4.png",
  },
  {
    id: 15,
    slug: "women-clothing",
    title: "Women's stylish hat",
    image:
      "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-6.png",
  },
];
export default function CategoriesSlider({ product }) {
  return (
    <Card products={categories}>
      <Link href={`/shop?product=${product.slug}`}>
        <div className=" h-11/12  border rounded-xl">
          <img
            src={product.image}
            alt="image"
            className="w-full rounded-t-xl"
          />

          <p className="py-2 text-center text-color-heading font-medium">
            {product.slug.toUpperCase()}
          </p>
        </div>
      </Link>
    </Card>
  );
}
