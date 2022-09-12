import React, { useEffect } from "react";
import Customers from "../../components/customers/Customers";
import CardINA from "../../components/destination/CardINA";
import CardJPN from "../../components/destination/CardJPN";
import Feature from "../../components/feature/Feature";

export default function Category() {
  useEffect(function () {
    document.title = "TooTravel | Category";
  }, []);

  return (
    <div className="mt-16 py-4 md:mt-4 lg:py-7">
      <div className="container mx-auto">
        <h1 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
          Top Destination For You
        </h1>
        <p className="mt-2 text-center text-base text-slate-500 md:mx-auto md:mt-3 md:w-2/3 lg:w-[25rem]">
          Much place suits your mood, Explore somewhere interesting and enjoy
          the vibes!
        </p>
        <div className="my-12 flex flex-col gap-y-20 lg:gap-y-10">
          <CardINA />
          <CardJPN />
        </div>
      </div>
      <Customers />
      <Feature />
    </div>
  );
}
