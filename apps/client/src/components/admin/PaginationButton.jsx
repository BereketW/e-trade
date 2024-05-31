import React from "react";

export default function PaginationButton({ onClick, currentPage, totalPages }) {
  return (
    <div className="flex justify-end my-8 items-center gap-3 ">
      <button
        onClick={() => onClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded border-color-primary text-color-primary font-extrabold transition-all ease-in-out duration-200 hover:bg-color-primary hover:text-color-border-light"
      >
        {"<"}
      </button>
      <span className="text-sm text-color-body">
        {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => onClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages
            ? "text-color-body border-color-body hover:bg-color-light cursor-not-allowed"
            : " border-color-primary hover:bg-color-primary text-color-primary"
        } font-extrabold px-4 py-2 border rounded transition-all ease-in-out duration-200  hover:text-color-border-light`}
      >
        {">"}
      </button>
    </div>
  );
}
