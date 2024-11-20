"use client";

import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const page = ({ServicesTitle}) => {
  return (
    <>
      <div className='pt-20'>
        <ServicesSection ServicesTitle={"Discover Our Services"} />

        <WhyChooseUs />
      </div>
    </>
  )
}

export default page
