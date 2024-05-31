"use client";
import Link from "next/link";
import React, { useState } from "react";
import { register } from "../../data/auth";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const res = await register(formState);

    console.log({ res });
    res?.err ? alert(JSON.stringify(res.err)) : router.push("/");
  }

  return (
    <div className="">
      <header className="z-10 fixed px-24 py-20 inset-0 flex justify-between h-10">
        <a href="/">logo</a>
        <div className="flex items-center gap-6">
          <p className="text-sm">Already a member ?</p>
          <Link
            className="px-9 py-4 ml-10 bg-color-secondary text-color-white  rounded-md inline-block"
            href={"/auth/login"}
          >
            Sign In Now
          </Link>
        </div>
      </header>
      <div className="flex gap-10 relative w-full h-svh items-center ">
        <div className="px-4 bg-login-bg bg-no-repeat bg-cover w-2/4 h-full pt-52 md: pr-12 pb-10 pl-20">
          <h3 className="text-2xl font-bold">We offer the best products</h3>
        </div>
        <div className="flex mt-16  items-center justify-center  w-full">
          <div className="w-2/3">
            <form action="" onSubmit={onSubmit} className="w-2/3">
              <h3 className="font-bold mb-3 text-2xl">{"I'm New Here"}</h3>
              <small className="text-color-body ">Enter detail below</small>
              <div className="flex gap-6">
                <div className="relative mt-10 ">
                  <label
                    htmlFor=""
                    className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    onChange={onChange}
                    type="text"
                    className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                  />
                </div>
                <div className="relative mt-10 ">
                  <label
                    htmlFor=""
                    className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                  >
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    onChange={onChange}
                    type="text"
                    className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                  />
                </div>
              </div>
              <div className="relative  ">
                <label
                  htmlFor=""
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={onChange}
                  type="email"
                  className="w-full text-sm py-3 mb-6 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor=""
                  className="absolute focus:border-color-primary text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Password
                </label>
                <input
                  onChange={onChange}
                  name="password"
                  type="password"
                  className="w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="">
                <button className="rounded-md text-color-white px-8 py-2 bg-color-primary">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
