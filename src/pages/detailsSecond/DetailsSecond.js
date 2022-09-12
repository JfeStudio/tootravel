import React, { useState, useEffect } from "react";
import Customers from "../../components/customers/Customers";
import Feature from "../../components/feature/Feature";
import RatingRounded from "../../components/RatingRounded";
import RelatedVacation from "../../components/related/RelatedVacation";
import { secondImage, textSpecificationSecond } from "../../data";

export default function DetailsSecond() {
  useEffect(function () {
    document.title = "TooTravel | Details ";
  }, []);

  const [sliderData, setSliderData] = useState(secondImage[0]);
  const handClick = (index) => {
    const slider = secondImage[index];
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
              {secondImage.map((data, i) => (
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
                EAST NUSA TENGGARA
              </span>
              <h2 className="mt-3 text-2xl font-semibold lg:text-3xl">
                Padar Island
              </h2>
              <p className="mt-1 text-sm font-medium text-slate-400 lg:mt-2">
                Manggarai, Indonesia
              </p>
              <RatingRounded />
              <p className="mt-3 mb-8 text-sm leading-normal text-slate-500 md:w-3/4 lg:mb-7 lg:mt-5 lg:w-11/12 lg:text-[.930rem]">
                Padar Island is the third largest island in the Komodo National
                Park area, after Komodo Island and Rinca Island. The island is
                relatively closer to Rinca Island than to Komodo Island, which
                is separated by the Leech Strait. Padar Island is not inhabited
                by ora (komodo dragon). Around this island there are also three
                or four small islands.
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
                {textSpecificationSecond.map(({ title, spec }, index) => {
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
