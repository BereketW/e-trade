import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import {
  FaHome,
  FaShoppingBasket,
  FaSignOutAlt,
  FaThLarge,
  FaUser,
} from "react-icons/fa";

const sideBarLinks = [
  {
    name: "Dashboard",
    href: "/profile/dashboard",
    Icon: FaThLarge,
  },
  {
    name: "Orders",
    href: "/profile/orders",
    Icon: FaShoppingBasket,
  },
  {
    name: "Addresses",
    href: "/profile/address",
    Icon: FaHome,
  },
  {
    name: "Password Change",
    href: "/profile/account_detail",
    Icon: FaUser,
  },
  {
    name: "Logout",
    href: "/profile/dashboard",
    Icon: FaSignOutAlt,
  },
];

export default function UserSidebar() {
  return (
    <nav className="border self-start border-color-light pt-10 px-9 pb-7 rounded-md w-1/3">
      <ul className="block">
        {sideBarLinks.map((sidebar) => {
          return (
            <li
              key={sidebar.href}
              className={`mb-3 last:mb-0 font-medium text-color-body text-sm rounded-md hover:bg-color-lighter 
                "bg-color-lighter text-color-primary" : ""
               transition-all ease-in-out duration-300 p-2.5 flex items-center gap-1`}
            >
              <Link href={sidebar.href} className="flex items-center gap-1">
                <sidebar.Icon />
                {sidebar.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
