import React from "react";
import { BiMap } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { BiUserPlus } from "react-icons/bi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

export default function InfoLocation() {
  return (
    <div className="absolute -bottom-6 right-1/2 z-20 mt-4 flex w-[87%] translate-x-1/2 scale-90 items-center justify-center gap-5 rounded-2xl bg-white p-3 shadow-3xl md:scale-100 md:justify-between md:p-4 lg:-bottom-10 lg:w-[55%] lg:p-5">
      <div className="md:flex md:flex-col md:gap-1">
        <div className="flex items-center gap-1">
          <BiMap className="text-xl" />
          <p className="text-sm font-semibold text-dark-scy md:text-base">
            Location
          </p>
        </div>
        <input
          className="hidden bg-transparent px-2 placeholder:text-sm md:block"
          type="text"
          placeholder="Where do you want yo go?"
        />
      </div>
      <div className="md:flex md:flex-col md:gap-1">
        <div className="flex items-center gap-1">
          <BiCalendarAlt className="text-lg" />
          <p className="text-sm font-semibold text-dark-scy md:text-base">
            Date
          </p>
        </div>
        <input
          className="hidden bg-transparent px-2 text-sm text-slate-500 md:block"
          type="date"
        />
      </div>
      <div className="md:flex md:flex-col md:gap-1">
        <div className="flex items-center gap-1">
          <BiUserPlus className="text-xl" />
          <p className="text-sm font-semibold text-dark-scy md:text-base">
            Guests
          </p>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          <HiOutlinePlus className="text-sm" />
          <span className="px-2 text-sm text-slate-400">Add guests</span>
          <HiMinus className="text-sm" />
        </div>
      </div>
      <div className="btn-searching rounded-full bg-dark-scy p-2">
        <RiSearchLine className="text-slate-50" />
      </div>
    </div>
  );
}
