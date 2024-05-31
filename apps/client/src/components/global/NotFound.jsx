import Image from "next/image";
import React from "react";

import { CiWarning } from "react-icons/ci";
export default function NotFound() {
  return (
    <div className="grid grid-cols-2 gap-10 w-11/12 m-auto mt-32">
      <div className="self-center flex flex-col items-start gap-7  ">
        <span className="flex justify-center items-center gap-1 font-md text-color-danger">
          <CiWarning className="" />
          Oops! Somthing's missing.
        </span>
        <h1 className="w-2/3 text-5xl font-bold">Page not found</h1>
        <p>
          It seems like we dont find what you searched. The page you were
          looking for doesn't exist, isn't available loading incorrectly.
        </p>
        <a
          href="/"
          className="text-white rounded-md bg-color-secondary font-bold px-9 py-4"
        >
          Back To Home{" "}
        </a>
      </div>
      <img
        className="block align-middle"
        src="https://new.axilthemes.com/demo/template/etrade/assets/images/others/404.png"
        alt="404.png"
      />
    </div>
  );
}
