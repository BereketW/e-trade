"use client";
import React from "react";
import {
  IoIosNotificationsOutline,
  IoIosArrowRoundForward,
} from "react-icons/io";
import { BsCart2, BsFileBarGraph, BsType } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import {
  MdManageAccounts,
  MdOutlinePeopleAlt,
  MdOutlineFeedback,
} from "react-icons/md";
import { PiCarProfileLight, PiInvoiceThin } from "react-icons/pi";
import { LiaBuysellads } from "react-icons/lia";
import { VscListUnordered } from "react-icons/vsc";
import Header from "../../components/global/Header";
import Link from "next/link";
import { AiFillSignal } from "react-icons/ai";
import AdminHeader from "@app/client/components/global/AdminHeader";
import {
  FaCalendarPlus,
  FaLayerGroup,
  FaPlus,
  FaProductHunt,
} from "react-icons/fa";

const sideBar = [
  {
    Arrow: IoIosArrowRoundForward,
    Icon: FaCalendarPlus,
    name: "Orders",
    slug: "Orders",
    href: "/admin/orders",
  },
  {
    Arrow: IoIosArrowRoundForward,
    Icon: FaProductHunt,
    name: "Products",
    slug: "Products",
    href: "/admin/products",
  },
  {
    Icon: MdOutlinePeopleAlt,
    name: "Customers",
    Arrow: IoIosArrowRoundForward,
    slug: "Customers",
    href: "/admin/customers",
  },
  {
    Icon: FaLayerGroup,
    name: "Categories",
    Arrow: IoIosArrowRoundForward,
    slug: "category",
    href: "/admin/category",
  },

  {
    Icon: MdOutlineFeedback,
    name: "Feedback",
    Arrow: IoIosArrowRoundForward,
    slug: "Feedback",
    href: "/admin/feedbacks",
  },
  {
    Icon: FaPlus,
    name: "Add Product",
    Arrow: IoIosArrowRoundForward,
    slug: "Add Product",
    href: "/admin/addProduct",
  },
];

export default function Layout({ children }) {
  return (
    <div className="mx-4 h-screen m-auto">
      <AdminHeader />
      <div className="flex h-screen">
        <div className=" scrollbar-thumb-sky-700 scrollbar-track-sky-300 overflow-y-auto fixed md:w-1/5 w-20 overflow-x-hidden transition-all ease-in-out  h-screen pr-8">
          <div className="flex flex-col h-full">
            <Link href="/admin/dashboard">
              <div className="border bg-white rounded-full py-3 pl-4 shadow-md flex items-center hover:bg-blue-200 my-5 cursor-pointer">
                <AiFillSignal className="w-7 h-7 mr-4" />

                <h1 className="max-md:hidden overflow-hidden">Dashboard</h1>
              </div>
            </Link>
            {sideBar.map(({ Icon, name, href }, ind) => (
              <Link key={ind} href={href || "/"}>
                <div className="py-3 px-4 flex items-center hover:bg-blue-200 mb-3 cursor-pointer">
                  <Icon className="w-7 max-md:w-10 h-7 mr-3" />
                  <h1 className="max-md:hidden overflow-hidden ">{name}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className=" fixed w-4/5 bg-[#f2f7fb] right-0 h-[88vh] overflow-y-scroll overflow-x-hidden container m-auto ">
          <div className="px-4 py-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
