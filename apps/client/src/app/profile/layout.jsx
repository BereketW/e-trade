"use client";
import Loader from "@app/client/components/global/Loader";
import Greeting from "@app/client/components/user/Greeting";
import UserSidebar from "@app/client/components/user/UserSidebar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";

// import { FaUser } from "react-icons/fa";

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <div className="px-16 mt-10">
      <div className="ml-20">
        {" "}
        <BsPerson
          className="text-color-white p-2 bg-color-primary rounded-full"
          size={70}
        />
        <h1 className="font-bold text-xl mt-4 flex items-center gap-1">
          Hello <Greeting name={true} />
        </h1>
        <span className="text-sm font-medium text-color-body">
          <Greeting email={true} />
        </span>
      </div>
      <div className="flex  gap-10 mt-10">
        <UserSidebar />
        <div className="w-full h-full px-16">{children}</div>
      </div>
    </div>
  );
}
