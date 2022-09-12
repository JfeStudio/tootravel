import React, { useEffect } from "react";
import HowTo from "../../components/howto/HowTo";
// import udBooking from "../../assets/path/ud-booking.svg";
import udBooking from "../../assets/path/ud-world.svg";
import Feature from "../../components/feature/Feature";

export default function Booking() {
  useEffect(function () {
    document.title = "TooTravel | Booking Form";
  }, []);

  return (
    <div className="mt-16 py-3 md:mt-7 lg:mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center gap-7 lg:flex-nowrap lg:gap-10">
          <div className="md:mx-auto md:w-4/6 lg:order-last lg:w-full lg:basis-1/2">
            <img className="w-full" src={udBooking} alt="booking" />
          </div>
          <div className="text-center lg:basis-1/2 lg:text-left">
            <h1 className="text-2xl font-semibold text-dark-scy md:text-3xl lg:text-[2.5rem]">
              Booking Online TooTravel
            </h1>
            <p className="mt-4 mb-9 text-base text-slate-500 lg:mb-8 lg:text-[.925rem]">
              Online booking for 24 hours. look at the procedures and rules in
              accordance with the established procedures, it is recommended for
              bookings and payments to be made long before the departure date.
            </p>
            <a
              href="#download-app"
              rel="noreferrer"
              className="btn-introduction btn-gradient mt-2 rounded-md py-4 px-9 font-medium text-slate-50 lg:px-8 lg:py-4 lg:text-sm"
            >
              Booking Now
            </a>
          </div>
        </div>
        <HowTo />
      </div>
      <Feature />
    </div>
  );
}
