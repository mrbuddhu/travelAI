import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">

        {/* LOGO FIX → Add height so it does not stretch navbar */}
        <img src={assets.logo2} alt="logo" className="h-20 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="hover:text-gray-400">Home</a>
          <a href="#About" className="hover:text-gray-400">About</a>
          <a href="#Projects" className="hover:text-gray-400">Trips</a>
          <a href="#Testimonials" className="hover:text-gray-400">Testimonials</a>
        </ul>

        {/* RIGHT SIDE BUTTON */}
        <button
          className="hidden md:block bg-white px-6 py-2 rounded-full font-medium text-gray-900 hover:shadow-lg transition items-center gap-2"
        >
          AI Trip Planner
          <span className="text-lg">🤖</span>
        </button>


        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          showMobileMenu ? 'fixed w-full' : 'w-0 h-0'
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt=""
          />
        </div>

        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" onClick={() => setShowMobileMenu(false)}>Home</a>
          <a href="#About" onClick={() => setShowMobileMenu(false)}>About</a>
          <a href="#Projects" onClick={() => setShowMobileMenu(false)}>Projects</a>
          <a href="#Testimonials" onClick={() => setShowMobileMenu(false)}>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

