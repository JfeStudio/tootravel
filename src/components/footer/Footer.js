import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="pt-16 pb-8 lg:pt-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 md:justify-between md:gap-y-12 lg:gap-y-5">
          <div className="basis-1/2 md:basis-auto">
            <h2 className="logo relative inline-block text-xl font-semibold text-dark-scy md:text-2xl lg:text-xl">
              TooTravel
            </h2>
            <p className="mt-3 text-base text-slate-500 md:text-lg lg:mt-5 lg:text-[.950rem] lg:text-slate-400">
              Enjoy the touring with TooTravel.
            </p>
          </div>
          <div className="basis-1/2 md:basis-auto">
            <h3 className="mb-3 text-lg font-semibold text-dark-scy md:text-xl lg:mb-5 lg:text-base">
              Menu
            </h3>
            <Link
              className="block text-base text-slate-500 hover:text-dark-scy md:text-lg lg:mb-1 lg:text-[.950rem] lg:text-slate-400"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-base text-slate-500 hover:text-dark-scy md:text-lg lg:text-[.950rem] lg:text-slate-400"
              to="/about"
            >
              About Us
            </Link>
          </div>
          <div className="basis-1/2 md:basis-auto">
            <h3 className="mb-3 text-lg font-semibold text-dark-scy md:text-xl lg:mb-5 lg:text-base">
              Booking Plan
            </h3>
            <span className="block text-base text-slate-500 md:text-lg lg:mb-1 lg:text-[.950rem] lg:text-slate-400">
              Personal Trip
            </span>
            <span className="block text-base text-slate-500 md:text-lg lg:text-[.950rem] lg:text-slate-400">
              Group Trip
            </span>
          </div>
          <div className="basis-1/2 md:basis-auto">
            <h3 className="mb-3 text-lg font-semibold text-dark-scy md:text-xl lg:mb-5 lg:text-base">
              Further Information
            </h3>
            <p className="text-base text-slate-500 md:text-lg lg:mb-1 lg:text-[.950rem] lg:text-slate-400">
              Terms & Conditions
            </p>
            <p className="text-base text-slate-500 md:text-lg lg:text-[.950rem] lg:text-slate-400">
              Privacy Policy
            </p>
          </div>
          <div className="basis-1/2 md:basis-auto">
            <h3 className="mb-3 text-lg font-semibold text-dark-scy md:text-xl lg:mb-5 lg:text-base">
              Get
            </h3>
            <span className="block text-base text-slate-500 md:text-lg lg:mb-1 lg:text-[.950rem] lg:text-slate-400">
              App Store
            </span>
            <span className="block text-base text-slate-500 md:text-lg lg:text-[.950rem] lg:text-slate-400">
              Google Play Store
            </span>
          </div>
          <div className="flex basis-full items-start justify-center gap-4 md:basis-auto lg:basis-full lg:justify-start lg:gap-2">
            <div className="social-media flex h-9 w-9 cursor-pointer rounded-full border-2 border-slate-600 hover:border-slate-600 lg:scale-90 lg:border-slate-400">
              <RiFacebookFill className="m-auto text-xl text-slate-600 lg:text-slate-400" />
            </div>
            <div className="social-media flex h-9 w-9 cursor-pointer rounded-full border-2 border-slate-600 hover:border-slate-600 lg:scale-90 lg:border-slate-400">
              <FaTwitter className="m-auto text-xl text-slate-600 lg:text-slate-400" />
            </div>
            <div className="social-media flex h-9 w-9 cursor-pointer rounded-full border-2 border-slate-600 hover:border-slate-600 lg:scale-90 lg:border-slate-400">
              <AiOutlineInstagram className="m-auto text-xl text-slate-600 lg:text-slate-400" />
            </div>
          </div>
        </div>
        <div className="copyrights mt-12 text-center text-sm text-slate-400 md:mt-16 lg:text-xs">
          © 2022 Created By{" "}
          <a
            href="https://github.com/JfeStudio"
            className="font-medium text-dark-scy lg:font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Scy Code
          </a>{" "}
          All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
