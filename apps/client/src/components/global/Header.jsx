"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchProducts from "./SearchProducts";
import { CiSearch } from "react-icons/ci";
import { cn } from "@app/client/lib/utils";
import { Cart } from "./cart";
import Wishlist from "./Wishlist";
import CategoriesMenu from "./CategoriesMenu";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pos, setPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setPos(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn("w-full bg-gray-50 px-16 mx-auto  duration-300 z-50", {
        "shadow-md sticky top-0 transition-all": isScrolled,
        "sticky top-0": pos > 56,
      })}
    >
      <nav className="w-full text-sm flex  items-center justify-between h-16 bg-gray-50 font-medium text-black gap-10  text-md">
        <ul className="flex gap-10 items-center justify-between w-full">
          <Link href="/">
            <li>Logo</li>
          </Link>
          <CategoriesMenu />
          <Link href="/shop">
            <li>Shop</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <li>
            <SearchProducts />
          </li>
          <Link href="/contact">
            <li>Contact</li>
          </Link>

          <Link href="/order">
            <li>Order</li>
          </Link>
        </ul>
        <ul className="flex gap-4 items-center">
          <div>
            <Wishlist />
          </div>

          <div>
            <Cart />
          </div>

          <ProfileMenu />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
