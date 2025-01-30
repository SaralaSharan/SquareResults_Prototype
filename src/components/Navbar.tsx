import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed w-full glass-nav z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white text-2xl font-semibold">Logo</div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#how-it-works" className="nav-link">How it works</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;