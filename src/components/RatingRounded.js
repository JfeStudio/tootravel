import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { dataImage } from "../data";

export default function RatingRounded() {
  return (
    <div className="mt-3 flex items-center gap-x-2">
      <div className="order-last flex items-center gap-1">
        <TiStarFullOutline className="text-xl text-orange-button lg:text-xl" />
        <span className="text-sm font-medium text-slate-400 lg:text-sm">
          4.5
        </span>
      </div>
      <div className="flex items-center -space-x-2">
        {dataImage.map(({ name, image }, index) => {
          return (
            <div className="w-6 overflow-hidden rounded-full" key={index}>
              <img className="w-full" src={image} alt={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
