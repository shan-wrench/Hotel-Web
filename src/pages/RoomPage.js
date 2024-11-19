import React from "react";
import Heading from "../components/common/Heading";
import Rooms from "../components/home/Rooms";
import Header from "../components/common/Header";

export default function Room() {
  return (
    <>
      <Header />
      <Heading heading="Room" title="Home" subtitle="Room" />
      <Rooms />
    </>
  );
}
