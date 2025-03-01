import React from "react";
import About from "../components2/About";
import PrizePool from "../components2/PrizePool";
import Rules from "../components2/Rules";
import Hero from "../components2/Hero";
import Theme from "../components2/Theme";
import Footer2 from "../components2/Footer2";
import Timeline from "../components2/Timeline";
import Navbar2 from "../components2/Navbar2";

export default function Ideate() {
  return (
    <>
      {/* Navbar */}
      <Navbar2 />

      {/* Sections with IDs */}
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="theme">
        <Theme />
      </section>

      <section id="timeline">
        <Timeline />
      </section>

      <section id="rules">
        <Rules />
      </section>

      <section id="prize-pool">
        <PrizePool />
      </section>

      {/* Footer */}
      <Footer2 />
    </>
  );
}
