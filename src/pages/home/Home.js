import React, { useEffect } from "react";
import Customers from "../../components/customers/Customers";
import Feature from "../../components/feature/Feature";
import Hero from "../../components/hero/Hero";
import Introduction from "../../components/introduction/Introduction";
import Vacation from "../../components/vacation/Vacation";
// import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  useEffect(function () {
    document.title = "TooTravel | Home";
  }, []);

  return (
    <>
      <Hero />
      <Vacation />
      <Introduction />
      <Customers />
      <Feature />
    </>
  );
}
