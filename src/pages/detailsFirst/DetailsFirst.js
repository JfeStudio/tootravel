import React, { useState, useEffect } from "react";
import Customers from "../../components/customers/Customers";
import Feature from "../../components/feature/Feature";
import RatingRounded from "../../components/RatingRounded";
import RelatedVacation from "../../components/related/RelatedVacation";
import { firstImage, textSpecificationFirst } from "../../data";

export default function DetailsFirst() {
  useEffect(function () {
    document.title = "TooTravel | Details ";
  }, []);

  const [sliderData, setSliderData] = useState(firstImage[0]);
  const handClick = (index) => {
    const slider = firstImage[index];
    setSliderData(slider);
  };
  return (
    <div className="mt-16 md:mt-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-y-7 lg:flex-nowrap lg:items-start lg:justify-between">
          <div className="lg:basis-[55%]">
            <div className="thumb-head overflow-hidden rounded-xl shadow-md md:rounded-2xl">
              <img className="w-full" src={sliderData.value} alt="thumb" />
            </div>
            <div className="flex items-center">
              {firstImage.map((data, i) => (
                <div
                  className=" my-2 mx-1 cursor-pointer overflow-hidden rounded-md shadow-3xl hover:opacity-80"
                  key={data.id}
                >
                  <img
                    className={`object-cover ${
                      sliderData.id === i ? "active" : ""
                    }`}
                    src={data.value}
                    alt="img"
                    onClick={() => handClick(i)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:basis-2/5">
            <div className="py-1">
              <span className="block max-w-max rounded-sm bg-slate-300 px-4 py-2 text-[.8rem] font-semibold uppercase text-slate-600 md:py-[.65rem] md:text-xs lg:py-3 lg:px-5 lg:text-xs">
                East Java
              </span>
              <h2 className="mt-3 text-2xl font-semibold lg:text-3xl">
                Mount Bromo
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-400 lg:mt-2">
                Probolinggo, Indonesia
              </p>
              <RatingRounded />
              <p className="mt-3 mb-8 text-sm leading-normal text-slate-500 md:w-3/4 lg:mb-7 lg:mt-5 lg:w-11/12 lg:text-[.930rem]">
                Mount Bromo or in Tenggerese spelled "Brama", also called the
                Tengger Caldera, is an active volcano in East Java, Indonesia.
                This mountain has a height of 2,329 meters above sea level and
                is located in four districts, namely Probolinggo Regency,
                Pasuruan Regency, Lumajang Regency, and Malang Regency. Mount
                Bromo is famous as the main tourist attraction in East Java.
              </p>
              <a
                href="#download-app"
                rel="noreferrer"
                className="btn-introduction btn-gradient block rounded-md py-5 px-9 text-center text-base font-medium text-slate-50 md:max-w-max lg:px-8 lg:py-4 lg:text-sm"
              >
                Booking Now
              </a>
            </div>
            <div className="mt-20 mb-16">
              <h4 className="text-lg font-medium text-dark-scy lg:text-xl">
                Specifications
              </h4>
              <div className="mt-4 flex flex-col">
                {textSpecificationFirst.map(({ title, spec }, index) => {
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b-[.04rem] border-slate-200 py-4"
                    >
                      <h5 className="text-sm font-medium uppercase text-slate-400">
                        {title}
                      </h5>
                      <p className="text-sm font-semibold text-dark">{spec}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedVacation />
      <Customers />
      <Feature />
    </div>
  );
}
