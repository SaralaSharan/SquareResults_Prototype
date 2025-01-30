import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhySection />
    </main>
  );
};

export default Index;