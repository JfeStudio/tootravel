import React from "react";
import { introduction } from "../../data";

export default function Introduction() {
  return (
    <div className="introduction py-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-28 lg:gap-y-52">
          {introduction.map(({ vektor, title, description, button }, index) => {
            return (
              <div
                key={index}
                className="rows-introduction flex flex-wrap justify-center gap-7 lg:flex-nowrap lg:items-center lg:gap-x-28"
              >
                <div className="hero-introduction max-w-xs lg:max-w-md lg:basis-3/5">
                  <img className="" src={vektor} alt={title} />
                </div>
                <div className="text-center lg:basis-2/5 lg:text-left">
                  <h3 className="text-2xl font-semibold text-dark-scy md:text-3xl lg:text-[2rem]">
                    {title}
                  </h3>
                  <p className="my-4 text-sm text-slate-500 md:text-base lg:text-[.940rem] lg:leading-normal">
                    {description}
                  </p>
                  <button className="btn-introduction btn-gradient mt-2 rounded-md py-3 px-7 font-medium text-slate-50 lg:text-sm">
                    {button}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
