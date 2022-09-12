import React, { useEffect } from "react";
import imageCEO from "../../assets/images/ceo.png";
import Feature from "../../components/feature/Feature";
import { FaRegSmile } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiFlag } from "react-icons/fi";
import Brand from "../../components/Brand";

export default function About() {
  useEffect(function () {
    document.title = "TooTravel | About Us";
  }, []);

  return (
    <div className="mt-16 md:mt-10 lg:mt-7">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-wrap justify-center gap-12 md:gap-y-20 lg:flex-nowrap lg:items-center lg:justify-around">
          <div className="shadow-circle relative basis-3/4 px-5 md:basis-1/2 lg:basis-2/6">
            <img className="z-30 w-full" src={imageCEO} alt="CEO" />
            <div className="rounded-default-c absolute -left-12 top-32 z-50 w-36 scale-90 overflow-hidden bg-white p-4 text-center shadow-3xl md:top-52 md:-left-8 md:scale-100 lg:-left-16 lg:scale-110 lg:bg-white/30 lg:backdrop-blur-md">
              <div className="flex items-center gap-2 text-lg">
                <FaRegSmile className="text-dark" />
                <p className="font-semibold text-dark">5.000+</p>
              </div>
              <p className="mt-1 mb-2 text-xs text-slate-500 lg:text-dark">
                Customers
              </p>
            </div>
            <div className="rounded-default-p absolute -left-10 -bottom-9 z-50 w-36 scale-[.85] overflow-hidden bg-white p-4 text-center shadow-3xl md:scale-95 lg:scale-105 lg:bg-white/30 lg:backdrop-blur-md">
              <div className="mt-2 flex items-center gap-2 text-lg">
                <FiFlag className="text-dark" />
                <p className="font-semibold text-dark lg:text-xl">100+</p>
              </div>
              <p className="mt-1 mb-2 text-xs leading-none text-slate-500 lg:text-dark">
                Professional
              </p>
              <p className="mt-1 text-xs leading-none text-slate-500 lg:text-dark">
                Tour Guide
              </p>
            </div>
            <div className="rounded-default-d absolute -right-10 bottom-10 z-50 w-32 scale-95 overflow-hidden bg-white p-4 text-right shadow-3xl md:-right-14 md:scale-105 lg:bottom-16 lg:scale-[1.2] lg:bg-white/30 lg:backdrop-blur-md">
              <div className="flex items-center justify-end gap-2 text-lg">
                <FiSend className="text-dark" />
                <p className="font-semibold text-dark">600+</p>
              </div>
              <p className="mt-1 mb-2 text-xs leading-none text-slate-500 lg:text-dark">
                Destination
              </p>
            </div>
          </div>
          <div className="text-center lg:basis-1/2 lg:text-left">
            <h1 className="text-[1.7rem] font-semibold text-dark md:text-4xl">
              Why Choose TooTravel?
            </h1>
            <p className="mt-3 text-base text-slate-500 md:mx-auto md:mt-5 md:w-11/12 md:text-lg lg:mx-0 lg:text-base lg:leading-normal">
              TooTravel has cooperated with country that provide more than 600
              beautiful place for you to enjoy and relax free time from the
              hustle and bustle of this file, Don't be worry, you won't get loss
              because TooTravel provide 100+ professional Tour Guide also, Our
              5.k+ customers were satisfied with the services we provide, So
              what are you waiting for? Let's plan your holiday with us!
            </p>
            <div className="btn mt-8 flex flex-wrap items-center justify-evenly gap-3 md:justify-center md:gap-x-5 lg:justify-start">
              <button className="btn-gradient w-full rounded-md border-2 border-slate-700 px-4 py-4 text-center text-base font-medium text-slate-50 md:w-56 lg:w-40 lg:py-3 lg:text-[.85rem] lg:font-semibold">
                Learn More
              </button>
              <a
                href="#download-app"
                rel="noreferrer"
                className="block w-full rounded-md border-2 border-slate-700 bg-transparent px-4 py-4 text-center text-base font-medium text-slate-600 md:w-56 lg:w-40 lg:py-3 lg:text-[.85rem] lg:font-semibold"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
        <Brand />
      </div>
      <Feature />
    </div>
  );
}
