import React from "react";
import Heading from "../components/common/Heading";
import About from "../components/home/About";
import Team from "../components/home/Team";
import Header from "../components/common/Header";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Heading heading="About" title="Home" subtitle="About" />
      <About />
      <Team />
    </>
  );
}
