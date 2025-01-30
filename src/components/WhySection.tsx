import React from "react";
import { motion } from "framer-motion";

const WhySection = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-light text-navy-900">
              Why
              <br />
              SquareResults?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              SquareResults is revolutionising the hiring process by creating an ecosystem that bridges
              the gaps in recruitment. We eliminate the chaos, improve transparency, and prioritise human
              connections—ensuring job seekers find real opportunities and recruiters discover the best
              talent, faster.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/3d1a240d-3118-444a-91f1-fb9a1e40855a.png"
              alt="SquareResults Team Collaboration"
              className="rounded-3xl shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;