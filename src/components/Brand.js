import React from "react";
import logoBrand1 from "../assets/images/brand-1.png";
import logoBrand2 from "../assets/images/brand-2.png";
import logoBrand3 from "../assets/images/brand-3.png";
import logoBrand4 from "../assets/images/brand-4.png";

export default function Brand() {
  return (
    <div className="mb-8 mt-16 flex flex-wrap items-center justify-center gap-5 md:mb-16 md:mt-24 md:gap-10 lg:mt-36 lg:justify-evenly">
      <div className="basis-[27%] md:basis-[22%] lg:basis-[12%]">
        <img className="w-full" src={logoBrand1} alt="" />
      </div>
      <div className="basis-[27%] md:basis-[22%] lg:basis-[12%]">
        <img className="w-full" src={logoBrand2} alt="" />
      </div>
      <div className="basis-[27%] md:basis-[22%] lg:basis-[12%]">
        <img className="w-full" src={logoBrand3} alt="" />
      </div>
      <div className="basis-[27%] md:basis-[22%] lg:basis-[12%]">
        <img className="w-full" src={logoBrand4} alt="" />
      </div>
      <div className="basis-[27%] md:basis-[22%] lg:basis-[12%]">
        <img className="w-full" src={logoBrand1} alt="" />
      </div>
    </div>
  );
}
