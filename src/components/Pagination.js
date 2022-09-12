import React from "react";

export default function Pagination() {
  return (
    <div className="flex items-center justify-center md:mt-14 md:justify-between lg:justify-around">
      <span className="hidden cursor-pointer rounded-full border border-slate-500 py-2 px-5 text-sm text-slate-500 md:block lg:text-xs">
        Back page
      </span>
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <span className="btn-gradient m-auto block h-7 w-7 cursor-pointer rounded-full text-center text-sm font-medium leading-7 text-white ">
          1
        </span>
        <span className="m-auto block h-7 w-7 cursor-pointer rounded-full border border-slate-500 bg-transparent text-center text-sm font-medium leading-7 text-slate-500 ">
          2
        </span>
        <span className="m-auto block h-7 w-7 cursor-pointer  rounded-full border border-slate-500 bg-transparent text-center text-sm font-medium leading-7 text-slate-500 ">
          3
        </span>
        <span className="m-auto block h-7 w-7 cursor-pointer  rounded-full border border-slate-500 bg-transparent text-center text-sm font-medium leading-7 text-slate-500 ">
          ..
        </span>
        <span className="m-auto block h-7 w-7 cursor-pointer  rounded-full border border-slate-500 bg-transparent text-center text-sm font-medium leading-7 text-slate-500 ">
          5
        </span>
      </div>
      <span className="hidden cursor-pointer rounded-full border border-slate-500 py-2 px-5 text-sm text-slate-500 md:block lg:text-xs">
        Next page
      </span>
    </div>
  );
}
