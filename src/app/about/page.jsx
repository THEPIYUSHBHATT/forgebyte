import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <div className="bg-black mt-12 md:mt-24 px-4">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row justify-around items-center rounded-3xl overflow-hidden space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="flex items-center justify-center p-4 md:p-24 text-center md:text-left">
            <h1 className="text-white text-3xl md:text-6xl leading-relaxed">
              Hey! Welcome to the{' '}
              <span className="text-orange-400 font-extrabold">
                Celestial Solutions..
              </span>
            </h1>
          </div>

          {/* Image Section */}
          <Image
            src="/about.avif"
            className="rounded-3xl"
            height={300}
            width={600}
            alt="hero img"
          />
        </div>

        {/* about the company */}
        <section className="bg-black text-white px-6 md:px-16 py-20 md:py-40">
          {/* WHO WE ARE Section */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full uppercase text-xs md:text-sm font-bold tracking-widest">
              Who We Are
            </span>
            <h2 className="text-2xl md:text-5xl font-bold mt-4">About our Company</h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Left Content */}
            <div className="md:w-2/3">
              <p className="text-gray-400 text-lg md:text-4xl leading-relaxed">
                Let's get acquainted! We are not your average digital marketing agency – we are a team of passionate individuals who eat, sleep, and breathe <span className="text-orange-400">creativity</span>, <span className="text-orange-400">innovation</span>, and all things digital.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg md:text-4xl mt-4">
                At <span className="text-orange-400 font-bold">Celestial Solutions</span>, we are on a mission to make your online <span className="text-orange-400 font-bold">dreams come true</span>, one pixel at a time! We are a bunch of <span className="text-orange-400">tech-savvy wizards</span>, design enthusiasts, and <span className="text-orange-400">social media mavens</span> who believe that digital marketing should be fun, exciting, and downright awesome.
              </p>
            </div>

            {/* Right Accordion */}
            <div className="w-full md:w-1/2">
              <div className="space-y-4">
                {/* Accordion Items */}
                {['Our History', 'Our Mission', 'Our Vision'].map((title, index) => (
                  <div
                    key={index}
                    className="bg-[#232323] rounded-3xl flex justify-between items-center p-6 md:p-4 py-8 md:py-10 cursor-pointer hover:bg-gray-700 transition"
                  >
                    <span className="font-semibold text-lg md:text-2xl">
                      {`0${index + 1}. ${title}`}
                    </span>
                    <span className="bg-gray-600 text-gray-200 rounded-full h-8 w-8 md:h-6 md:w-6 flex justify-center items-center">
                      +
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* brands we have worked with */}
        <section className="bg-black text-white px-6 md:px-16 py-12">
          {/* Title */}
          <div className="text-center mb-8">
            <span className="text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full uppercase text-sm font-bold tracking-widest">
              Brands
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">Brands we have worked with</h2>
          </div>

          {/* Scrolling Brands */}
          <div className="flex items-center justify-center gap-24 mt-20 overflow-hidden relative">
            <div>
              <Image
                src={"/google2.webp"}
                alt='google pic'
                height={200}
                width={200}
              />
            </div>
            <div>
              <Image
                src={"/micro.png"}
                alt='google pic'
                height={200}
                width={200}
              />
            </div>



          </div>
        </section>
      </div>
    </>
  );
};

export default page;
