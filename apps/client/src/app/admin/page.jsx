"use client";
import { useRouter } from "next/navigation";
import React from "react";
// import { useRouter } from "";
export default function Page() {
  const router = useRouter();

  return router.push("/admin/dashboard");
}
