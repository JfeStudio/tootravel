import React from "react";
import { howto } from "../../data";

export default function HowTo() {
  return (
    <div className="pt-16 pb-7 lg:pt-28 lg:pb-16">
      <h1 className="text-center text-2xl font-semibold text-dark-scy lg:text-3xl">
        TooTravel Online Booking Flow
      </h1>
      <div className="mt-10 flex flex-wrap gap-y-24 lg:mt-24 lg:justify-center lg:gap-y-32">
        {howto.map(({ vektor, title, link, description }, index) => {
          return (
            <div
              className="flex flex-wrap justify-center gap-7 lg:basis-1/2"
              key={index}
            >
              <div className="mx-auto w-56 lg:w-52">
                <img className="w-full" src={vektor} alt={title} />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-medium text-dark-scy">{title}</h3>
                <span className="mt-2 block cursor-pointer text-base italic text-blue-500 hover:underline lg:text-sm">
                  {link}
                </span>
                <p className="my-2 text-base text-slate-500 md:mx-auto md:w-3/4 lg:text-sm">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
