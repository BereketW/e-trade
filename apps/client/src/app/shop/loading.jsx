import Loader from "@app/client/components/global/Loader";
import React from "react";

export default function loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader size={40} color={"#777777"} />
    </div>
  );
}
