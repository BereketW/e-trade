"use client";

import Link from "next/link";
import { login } from "../../data/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../global/Loader";
// import { loginSchema } from "@app/client/lib/validation";

export default function Login() {
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setStatusCode] = useState();

  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setStatusCode();
  }

  async function onSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await login(formState);
      setIsLoading(false);
      console.log(res.error);
      if (res?.error) {
        alert(JSON.stringify(res.error));
        setStatusCode(res.error.statusCode);
      } else {
        router.push("/");
      }
    } catch (error) {
      return { error };
    }
  }

  return (
    <div className="">
      <header className="z-10 fixed px-24 py-20 inset-0 flex justify-between h-10">
        <a href="/">logo</a>
        <div className="flex items-center gap-6">
          <p className="text-sm">Not a member ?</p>
          <Link
            className="px-9 py-4 ml-10 bg-color-secondary text-color-white  rounded-md inline-block"
            href={"/auth/register"}
          >
            Sign Up Now
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
              <h3 className="font-bold mb-3 text-2xl">Sign in to e-store</h3>
              <small className="text-color-body ">Enter detail below</small>
              <div className="relative mt-10 ">
                <label
                  htmlFor=""
                  className="absolute text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Email
                </label>
                <input
                  name="email"
                  onChange={onChange}
                  type="text"
                  className={`w-full text-sm py-3 mb-6 px-7 ${
                    statusCode === 404 ? "border-red-500" : "border-color-light"
                  } text-color-body rounded-md border`}
                />
              </div>
              <div className="relative w-full">
                <label
                  htmlFor=""
                  className="absolute  text-color-body mb-1.5 text-sm font-medium inline-block -top-3 left-5 pointer-events-none bg-white py-0 px-2.5"
                >
                  Password
                </label>
                <input
                  name="password"
                  onChange={onChange}
                  type="password"
                  className="focus:border-color-primary w-full text-sm py-3 mb-9 px-7 border-color-light text-color-body rounded-md border"
                />
              </div>
              <div className="flex justify-between  items-center">
                <button
                  className="rounded w-32 h-12 flex justify-center items-center text-color-white px-8 py-3 bg-color-primary"
                  disabled={isLoading}
                >
                  {isLoading ? <Loader size={20} /> : "Sign In"}
                </button>
                <Link href="" className="text-sm text-color-primary">
                  Forgot Password ?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Login() {
//   return (
//     <div className="fixed h-full w-full overflow-hidden inset-0">
//       <div className="fixed h-full w-full overflow-hidden inset-0 px-24 py-10">
//         <div className="flex flex-wrap items-center -mx-4">
//           <div className="w-1/3 px-4  flex-shrink-0 flex-grow-0 flex-auto">
//             <a href="index.html" className="site-logo">
//               <img
//                 src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
//                 alt="logo"
//               />
//             </a>
//           </div>
//           <div className="w-2/3 px-4 flex-shrink-0 flex-grow-0 flex-auto">
//             <div className="flex items-center justify-end ">
//               <p>Not a member?</p>
//               <a
//                 href="sign-up.html"
//                 className="inline-block rounded-md
//                 px-9 py-4 ml-10 bg-color-secondary text-color-white sign-up-btn"
//               >
//                 Sign Up Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-wrap -mx-4">
//         <div className="px-4">
//           <div className="min-h-900 pt-52 pr-12 pb-0 pl-24  bg-login-bg bg-no-repeat bg-cover bg-center">
//             <h3 className="text-2xl font-bold">We Offer the Best Products</h3>
//           </div>
//         </div>
//         <div className="px-4">
//           <div className="h-81.8 overflow-y-auto w-full flex mt-44  -mr-8 -mb-8 -ml-8">
//             <div className="max-w-400 p-8 w-full ">
//               <h3 className="text-2xl font-bold">Sign in to eTrade.</h3>
//               <p className="text-sm mb-14">Enter your detail below</p>
//               <form className="block m-0 pb-8">
//                 <div className="mb-9 relative ">
//                   <label>Email</label>
//                   <input
//                     type="email"
//                     className="h-16 border-color-light py-0 px-7 text-color-body rounded-md text-sm border"
//                     name="email"
//                     value="annie@example.com"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     value="123456789"
//                   />
//                 </div>
//                 <div className="form-group d-flex align-items-center justify-content-between">
//                   <button
//                     type="submit"
//                     className="axil-btn btn-bg-primary submit-btn"
//                   >
//                     Sign In
//                   </button>
//                   <a href="forgot-password.html" className="forgot-btn">
//                     Forget password?
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
