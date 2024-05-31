import React from "react";

export default function FlashsalesTime() {
  return (
    <div className="flex items-center gap-2 mr-20">
      <span className="p-2 flex items-center justify-center h-12 w-12 bg-color-lighter rounded-full">
        0
      </span>
      <span>:</span>
      <span className="p-2 flex items-center justify-center h-12 w-12 bg-color-lighter rounded-full">
        00
      </span>
      <span>:</span>
      <span className="p-2 flex items-center justify-center h-12 w-12 bg-color-lighter rounded-full">
        00
      </span>
      <span>:</span>
      <span className="p-2 flex items-center justify-center h-12 w-12 bg-color-lighter rounded-full">
        00
      </span>
    </div>
  );
}
