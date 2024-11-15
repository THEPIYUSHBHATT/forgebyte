"use client";
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-black text-white">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-orange-500 text-black font-bold px-2 py-1 rounded">X</div>
        <span className="font-bold text-xl">FORGEBYTE</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-6 text-lg border-2 rounded-full px-4 py-4  bg-black">
        <a href="#home" className="text-orange-500 px-5 py-3 hover:bg-[#262626] text-2xl font-semibold rounded-full">Home</a>
        <a href="#about" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">About</a>
        <a href="#services" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">Services</a>
        <a href="#services" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">Projects</a>
        <a href="#services" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">Reviews</a>
        <a href="#services" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">Blog</a>
        <a href="#services" className="text-orange-500 px-5 py-3 hover:bg-[#262626] rounded-full text-2xl font-semibold">Contact</a>
        
      </nav>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden bg-orange-500 text-black px-4 py-2 rounded-full" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="flex flex-col items-center space-y-4 mt-4 lg:hidden text-lg border-2 rounded-3xl px-4 py-4 bg-black">
          <a href="#home" className="text-orange-500 px-5" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" className="px-5" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" className="px-5" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#projects" className="px-5" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#reviews" className="px-5" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#blog" className="px-5" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contact" className="px-5" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}

      {/* Template Button */}
      <button className="hidden lg:block bg-orange-500 text-black px-4 py-2 rounded-full">
        TEMPLATE
      </button>
    </header>
  );
};

export default Header;
