import React from "react";
import { cardINA } from "../../data";
import Card from "../Card";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function CardINA() {
  return (
    <>
      <div className="title">
        <h1 className="my-4 flex items-center justify-center gap-1 text-[1.35rem] font-medium text-dark-scy md:mb-8 md:justify-start">
          <IoLocationSharp /> Indonesia
        </h1>
        <div className="card-ina flex flex-wrap justify-center gap-7 lg:justify-between lg:gap-5">
          {cardINA.map(
            ({ link, image, title, location, price, preview }, index) => {
              return (
                <Card
                  key={index}
                  className="relative max-w-xs rounded-xl bg-white p-5 shadow-3xl lg:max-w-none lg:basis-[23%] lg:p-4"
                >
                  <a href={link} rel="noreferrer">
                    <div className="overflow-hidden rounded-xl lg:rounded-lg">
                      <img className="w-full" src={image} alt={title} />
                    </div>
                  </a>
                  <h3 className="mt-4 text-xl font-medium text-dark-scy lg:text-lg">
                    {title}
                  </h3>
                  <p className="mt-3 mb-4 text-base text-slate-500 lg:mt-2 lg:mb-3 lg:text-xs">
                    {preview}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-500 lg:text-xs">
                      <IoLocationSharp className="text-dark-scy" />
                      {location}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-slate-500 lg:text-xs">
                      <RiMoneyDollarCircleFill className="text-dark-scy" />
                      {price}
                    </div>
                  </div>
                </Card>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
