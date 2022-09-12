import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";

export default function Navbar() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] bg-slate-50 py-3 md:static lg:py-5 ${
        navbar ? "header-fixed" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={() => setIsNavShowing(false)}>
            <h1 className="logo relative text-xl font-semibold text-dark-scy">
              TooTravel
            </h1>
          </Link>
          <ul
            className={`absolute top-11 right-7 z-50 flex flex-col gap-5 rounded-lg bg-white py-9 px-12 shadow-3xl transition-all duration-300 ease-in-out md:static md:flex-row md:items-center md:bg-slate-50 md:p-0 md:shadow-none lg:gap-x-11 
            ${isNavShowing ? "show-navigation" : "hide-navigation"}`}
          >
            {links.map(({ name, path }, index) => {
              return (
                <li
                  key={index}
                  className="list-item text-center text-sm lg:text-[.9rem]"
                >
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? "nav-active font-medium" : ""
                    }
                    onClick={() => setIsNavShowing((prev) => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
            <div className="border-t pt-4 md:hidden md:border-none md:pt-0">
              <a
                href="#download-app"
                rel="noreferrer"
                className="btn-gradient block w-full rounded-md  px-5 py-4 text-center text-sm font-medium text-slate-50 md:w-56 md:max-w-max md:scale-90 lg:w-40 lg:scale-95 lg:py-3 lg:text-[.85rem] lg:font-semibold"
                onClick={() => setIsNavShowing((prev) => !prev)}
              >
                Download App
              </a>
            </div>
          </ul>
          <div className="hidden border-t pt-4 md:block md:border-none md:pt-0">
            <a
              href="#download-app"
              rel="noreferrer"
              className="btn-gradient block w-full rounded-md  px-5 py-4 text-center text-sm font-medium text-slate-50 md:w-56 md:max-w-max md:scale-90 lg:w-40 lg:scale-95 lg:py-3 lg:text-[.85rem] lg:font-semibold"
              onClick={() => setIsNavShowing((prev) => !prev)}
            >
              Download App
            </a>
          </div>
          <div
            className="menu-hamburger cursor-pointer md:hidden"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? (
              <BiX className="text-3xl" />
            ) : (
              <BiMenuAltRight className="text-3xl" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
