import React from "react";
import Heading from "../components/common/Heading";
import Sliders from "../components/home/Slider";
import Header from "../components/common/Header";

export default function Testimonial() {
  return (
    <>
      <Header />
      <Heading heading="Testimonial" title="Home" subtitle="Testimonial" />
      <Sliders />
    </>
  );
}
