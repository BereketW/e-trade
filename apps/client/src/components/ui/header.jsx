import Link from "next/link";
import React from "react";
import { SheetDemo } from "@app/client/app/sheet";

const Header = () => {
  return (
    <header className="w-full   mt-4">
      <nav className="w-full flex justify-between p-4 bg-slate-500">
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </ul>
        <ul className="flex gap-10">
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
