"use client";
import React from 'react';
import ServicesSection from './ServicesSection';

const LandingPage = () => {
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
                <section className='flex items-center justify-center w-full h-[600px] rounded-xl bg-slate-500'>
                    photos
                </section>

                {/* what we are offering */}
                <section className='flex items-center justify-center'>
                    <ServicesSection />

                </section>
            </div>

        </>


    );
};

export default LandingPage;
