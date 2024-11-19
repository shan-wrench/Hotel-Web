import React from "react";
import Heading from "../components/common/Heading";
import Services from "../components/home/Service";
import Sliders from "../components/home/Slider";
import Header from "../components/common/Header";

export default function Service() {
  return (
    <>
      <Header />
      <Heading heading="Services" title="Home" subtitle="Services" />
      <Services />
      <Sliders />
    </>
  );
}
