import React from "react";
import playStore from "../../assets/images/play-store.png";
import appStore from "../../assets/images/app-store.png";

export default function Feature() {
  return (
    <div className="scroll-mt-20 py-8" id="download-app">
      <div className="container mx-auto">
        <div className="btn-gradient rounded-xl p-8 text-center lg:rounded-2xl lg:p-24">
          <h1 className="text-2xl font-semibold text-slate-50 md:text-3xl lg:text-4xl ">
            Download the TooTravel app, now!
          </h1>
          <p className="my-6 text-sm text-slate-400 md:text-base lg:text-lg">
            Get the latest update from us and easier booking for sure
          </p>
          <div className="flex items-center justify-center gap-3 lg:gap-x-5">
            <img
              className="w-[8.5rem] cursor-pointer lg:w-36"
              src={playStore}
              alt="play store"
            />
            <img
              className="w-[8.5rem] cursor-pointer lg:w-36"
              src={appStore}
              alt="app store"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
