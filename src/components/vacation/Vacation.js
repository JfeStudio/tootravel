import React from "react";
import { cardVocation } from "../../data";
import Collection from "../Collection";
import Card from "../Card";
import Pagination from "../Pagination";

export default function Vacation() {
  return (
    <>
      <div className="pt-14 pb-10 md:pt-20 lg:pt-32">
        <div className="container mx-auto">
          <h1 className="text-center text-[1.45rem] font-semibold text-dark-scy md:text-3xl lg:text-4xl">
            Guides for your next vacation
          </h1>
          <p className="mt-2 text-center text-sm text-slate-400 lg:mt-5">
            Check out this weeks's selection of popular product that might catch
            you eye, and don't
          </p>
          <Collection />
          <div className="my-8 flex flex-wrap justify-center gap-7 lg:mt-11">
            {cardVocation.map(
              ({ link, image, title, price, preview }, index) => {
                return (
                  <Card
                    className="sliders max-w-xs rounded-xl bg-white p-4 shadow-3xl lg:shadow-sm"
                    key={index}
                  >
                    <a href={link} rel="noreferrer">
                      <div className="overflow-hidden rounded-xl">
                        <img src={image} alt={title} />
                      </div>
                    </a>
                    <div className="flex items-center justify-between border-b pt-3 pb-2">
                      <h3 className="text-base font-semibold lg:text-xl">
                        {title}
                      </h3>
                      <p className="text-sm font-semibold">{price}</p>
                    </div>
                    <p className="mt-2 text-sm text-slate-400 lg:leading-normal">
                      {preview}
                    </p>
                  </Card>
                );
              }
            )}
          </div>
          <Pagination />
        </div>
      </div>
    </>
  );
}
