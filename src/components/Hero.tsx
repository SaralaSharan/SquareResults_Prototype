import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4 hero-text">
            Your one-stop
            <br />
            Hiring solution
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 hero-text">
            Connecting job seekers and recruiters, the right way.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button w-64"
            >
              JOB SEEKERS
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-button w-64"
            >
              HIRING PARTNERS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;