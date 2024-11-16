"use client";
import Image from 'next/image';

import ServicesSection from '../components/ServicesSection.jsx';

export default function Home() {
  return (
    <>
      <div className='bg-black'>
        <section className="bg-black text-white flex flex-col items-center text-center p-16 h-screen space-y-4 mt-24">
          <h1 className="text-[60px] font-sour-gummy">
            The Best <span className="bg-[#f58327] text-black px-2">Digital </span>
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
        {/* photos */}
        <section className='relative flex items-center pb-[221px] justify-center w-full  bg-gradient-to-t from-orange-400 to-black h-screen'>
          <div class="absolute  flex items-center justify-center z-0 whitespace-nowrap animate-marquee">
            <h1 class="text-8xl font-serif font-bold text-white opacity-100">Best Digital Marketing Agency</h1>
          </div>
          <div className='relative z-10'>

            <Image
              src={"/pic.avif"}
              className=' w-screen bg-cover'
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </section>

        {/* what we are offering */}
        <section className='flex items-center justify-center'>
          <ServicesSection />

        </section>
      </div>

    </>
  );
}
