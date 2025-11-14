import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header
      id="Header"
      className="relative min-h-screen mb-4 flex items-center justify-center w-full overflow-hidden"
    >
      <img
        src={assets.header}
        alt="Header Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Animate once on mount and stay visible */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}         // <- use animate instead of whileInView
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 container mx-auto px-6 md:px-20 lg:px-32 text-center text-white py-20"
      >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
          Find the perfect trip for your next escape
        </h2>

        <div className="mt-12 flex items-center justify-center gap-6">
          <a
            href="#Projects"
            className="px-8 py-3 border border-white rounded text-white inline-block hover:bg-white/10 transition"
            aria-label="Explore Trips"
          >
            Explore Trips
          </a>

          <a
            href="#Contact"
            className="px-8 py-3 bg-blue-600 text-white rounded inline-block shadow hover:bg-blue-700 transition"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
