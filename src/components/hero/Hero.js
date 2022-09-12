import React from "react";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImages1 from "../../assets/images/hero-images-1.jpg";
import HeroImages2 from "../../assets/images/hero-images-2.jpg";
import HeroImages3 from "../../assets/images/hero-images-3.jpg";
import HeroImages4 from "../../assets/images/hero-images-4.jpg";
import InfoLocation from "../InfoLocation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Hero() {
  return (
    <>
      <div className="hero mt-16 md:mt-4">
        <div className="container relative mx-auto">
          <Swiper
            className="container-swiper w-full rounded-2xl lg:h-[45rem] lg:rounded-3xl"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            <SwiperSlide className="cols-swiper">
              <img src={HeroImages1} alt="town" />
            </SwiperSlide>
            <SwiperSlide className="cols-swiper">
              <img src={HeroImages2} alt="town" />
            </SwiperSlide>
            <SwiperSlide className="cols-swiper">
              <img src={HeroImages3} alt="town" />
            </SwiperSlide>
            <SwiperSlide className="cols-swiper">
              <img src={HeroImages4} alt="town" />
            </SwiperSlide>
            <div className="absolute top-8 right-1/2 z-20 w-11/12 translate-x-1/2 text-center text-slate-50 md:top-11 lg:top-20">
              <p className="text-base md:text-xl">All you need is TooTravel</p>
              <h1 className="text-[1.6rem] font-semibold md:mt-1 md:text-[2.75rem] lg:text-[3.4rem]">
                Explore Beautiful Places
              </h1>
            </div>
          </Swiper>
          <InfoLocation />
        </div>
      </div>
    </>
  );
}
