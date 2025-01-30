import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhySection from "../components/WhySection";
import JobSeekersSection from "../components/JobSeekersSection";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhySection />
      <JobSeekersSection />
    </main>
  );
};

export default Index;