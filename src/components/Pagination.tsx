import React from "react";

export default function Pagination({
  itemPerPage,
  totalItems,
  paginate,
  currentPage,
}: {
  itemPerPage: number;
  totalItems: number;
  paginate: (page: number) => void;
  currentPage: number;
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const firstShowing = currentPage * itemPerPage - (itemPerPage - 1);
  const lastShowing = currentPage * itemPerPage;

  return (
    <div className="py-2 flex flex-col md:flex-row items-center justify-between gap-2">
      <div className="block">
        <ul className="flex pl-0 rounded list-none flex-wrap">
          <li>
            {pageNumbers.map((number) => (
              <a
                key={number}
                onClick={() => {
                  paginate(number);
                }}
                href="#"
                className={
                  currentPage === number
                    ? "bg-blue border-gray-600  relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500  relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </div>
      <div className="text-sm">
        <p className="text-gray-700">
          Showing
          <span className="font-medium"> {firstShowing} </span>-
          <span className="font-medium">
            {" "}
            {lastShowing > totalItems ? totalItems : lastShowing}{" "}
          </span>
          of
          <span className="font-medium"> {totalItems} </span>
          records
        </p>
      </div>
    </div>
  );
}
