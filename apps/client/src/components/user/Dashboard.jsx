"use client";
import React from "react";
import Greeting from "./Greeting";

export default function Dashboard() {
  return (
    <div>
      <h3 className="mb-8 flex items-center gap-2 font-semibold">
        Hello <Greeting name={true} /> (not <Greeting name={true} />? Logout)
      </h3>
      <p>
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
}
