"use client";
import React, { useEffect, useState } from "react";
import Input from "../global/Input";
import { getMe } from "@app/client/data/users";
import user from "../user/user";
export default function AccountDetail() {
  return (
    <div className="w-1/2">
      <form action="" className="w-full flex flex-col gap-4">
        <h1 className="text-xl font-bold">Password Change</h1>
        <Input name={"Current Password"} className="" />
        <Input name={"New Password"} />
        <Input name={"Confirm New Password"} />
        <button
          type="submit"
          className="self-start rounded  bg-color-primary px-4 py-3 text-white"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
