import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { customers } from "../../data";
import { TiStarFullOutline } from "react-icons/ti";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Customers() {
  return (
    <>
      <div className="py-10 lg:py-28">
        <div className="container mx-auto">
          <h1 className="text-center text-2xl font-semibold text-dark-scy md:text-3xl lg:text-4xl">
            Satisfied Customers Are Our Best Ads
          </h1>
          <Swiper
            className="containers mt-7 w-full md:w-2/3 lg:mt-14 lg:w-10/12"
            spaceBetween={30}
            // klw mau bisa di atur SwiperSlidenya pake auto untuk perviewnya + loop + centered
            slidesPerView={"auto"}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {customers.map(({ image, name, job, rating, review }, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="rounded-xl bg-white p-6 shadow-sm lg:w-48"
                >
                  <div className="flex items-center gap-3 border-b-[1px] border-slate-200 pb-4">
                    <div className="w-14 overflow-hidden rounded-full lg:w-11">
                      <img className="w-full" src={image} alt={name} />
                    </div>
                    <div className="mr-auto">
                      <h5 className="text-base font-semibold text-dark-scy lg:text-sm">
                        {name}
                      </h5>
                      <p className="text-sm text-slate-500 lg:text-xs">{job}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <TiStarFullOutline className="text-2xl text-orange-button lg:text-xl" />
                      <span className="text-base font-medium text-slate-400 lg:text-sm">
                        {rating}
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-400 lg:text-xs lg:leading-normal">
                    {review}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
}
