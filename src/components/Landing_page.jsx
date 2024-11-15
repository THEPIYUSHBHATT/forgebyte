"use client";
import React from 'react';

const LandingPage = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center text-center p-16 h-[1000px] space-y-4">
      <h1 className="text-[60px] font-sour-gummy">
        The Best <span className="bg-orange-500 text-black px-2">Digital </span>
      </h1>
      <h1 className='text-white px-2 text-[70px] font-bold'>
         Marketing Agency.
      </h1>
      <p className="text-lg max-w-2xl">
        We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.
      </p>
      <button className="bg-orange-500 text-black px-6 py-3 mt-6 rounded-full">
        GET TEMPLATE
      </button>
      
    </section>
  );
};

export default LandingPage;
