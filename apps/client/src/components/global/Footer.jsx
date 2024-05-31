import React from "react";
import { PiVoicemailThin } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";

import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
// import { FaFacebook, FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedIn } from "react-icons/fa";
// import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    // <main className="w-full  mx-auto">
    //   <div className="flex flex-col items-center justify-center p-10 gap-4">
    //     <div className="flex gap-10">
    //       <div>logo</div>
    //       <div>Home</div>
    //       <div>Contact</div>
    //       <div>About</div>
    //       <div>Address</div>
    //       <div>Shop</div>
    //     </div>
    //     <div>
    //       <p>@copy right</p>
    //     </div>
    //   </div>
    // </main>
    <>
      <footer className="bg-color-heading p-10 mt-20">
        <div className="flex font-medium  justify-between border-b border-gray-500 gap-5 pb-4">
          <div className="">
            <h5 className="font-medium text-lg mb-5 text-color-white">
              Support
            </h5>
            <div className="text-[#d6d6d6]  text-sm">
              <p>685 Market Street,</p>
              <p>Las Vegas, LA 95820,</p>
              <p>United States.</p>
            </div>
            <div className="mt-4 text-[#d6d6d6]  text-sm">
              <p className="flex gap-2 items-center">
                {" "}
                <span>
                  <PiVoicemailThin />
                </span>
                example@domain.com
              </p>

              <p className="flex gap-2 items-center">
                <span>
                  <CiPhone />
                </span>
                (+01) 850-315-5862
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-medium text-color-white text-lg">Account</h5>
            <ul className="flex flex-col gap-2 text-[#d6d6d6]  text-sm">
              <li className="hover:border-b border-black transition-all ease-in 100ms">
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Login / Register</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="font-medium text-color-white text-lg">Quick Link</h5>
            <ul className="flex text-[#d6d6d6]  text-sm flex-col gap-2 relative">
              <li>
                <a href="">Privacy Police</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <div className="flex  flex-col gap-4">
            <h5 className="font-medium text-color-white text-lg">
              Stay Up To Date
            </h5>
            <p className="text-[#d6d6d6] w-5/6 ">
              <small>
                Subscribe to our newsletter and get{" "}
                <span className="text-color-secondary">20% discount</span> offer
                in your first order
              </small>
            </p>
            <div className="relative w-2/3">
              <input
                type="text"
                className="bg-[#49495f] border-none focus:outline-0 rounded text-sm w-full  px-10 py-3"
                placeholder="Enter Your Email"
              />
              <button className="hover:bg-color-secondary transition-all ease-in-out bg-color-primary text-sm px-5 py-3 absolute right-0 top-0 text-color-white rounded-r ">
                Subscribe
              </button>
            </div>
            {/* <form action="" className="flex gap-2">
          <input
            type="text"
            className="focus:outline-none border-2 border-black"
          />
          <button
            type="submit"
            className="px-10 py-2 border-2 border-color-primary rounded hover:bg-color-primary hover:text-white"
          > */}

            {/* </button>
        </form> */}
          </div>
        </div>
        <div className="mt-10 justify-end items-center flex gap-6 text-color-white">
          <p className="flex p-4 flex-col border-r border-color-primary">
            Social <span>Network</span>
          </p>
          <div className="hover:bg-color-secondary transition-all ease-in-out bg-color-primary p-3 rounded-full text-white">
            <FaFacebookF />
          </div>
          <div className="hover:bg-color-secondary transition-all ease-in-out bg-color-primary p-3 rounded-full text-white">
            {" "}
            <FaInstagram />
          </div>
          <div className="hover:bg-color-secondary transition-all ease-in-out bg-color-primary p-3 rounded-full text-white">
            <FaTwitter />
          </div>
          <div className="hover:bg-color-secondary transition-all ease-in-out bg-color-primary p-3 rounded-full text-white">
            <FaLinkedin />
          </div>
          <div className="bg-color-primary p-3 rounded-full hover:bg-color-secondary transition-all ease-in-out text-white">
            <FaDiscord />
          </div>
        </div>
        <p className="text-[#d6d6d6] text-sm text-center my-4">
          &copy; {new Date().getFullYear()}. All rights reserved by Axilthemes.
        </p>
      </footer>
    </>
  );
};

export default Footer;
