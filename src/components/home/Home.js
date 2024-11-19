import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";
import Header from "../common/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <Book />
      <About />
      <Rooms />
      <Services />
      <Sliders />
      <Teams />
    </>
  );
}
