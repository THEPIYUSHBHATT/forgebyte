"use client";

import React from "react";
import Image from "next/image";
import { Linkedin, Facebook, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Lakshya Lohani",
      title: "Founder, Marketing Expert",
      image: "/unnammed.png", // Replace with your image path
      role: "MARKETING GENIUS",
      highlight: "Engaging",
    },
    {
      name: "Rishabh Gautam",
      title: "Backend Developer",
      image: "/images/magnus.png", // Replace with your image path
      role: "CTO",
      highlight: "Strategic",
    },
    {
      name: "Yash Gaur",
      title: "Full-Stack Developer",
      image: "/images/daxton.png", // Replace with your image path
      role: "DESIGNER & DEVELOPER",
      highlight: "Visionary",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <span className="text-orange-400 bg-orange-900/20 px-4 py-2 rounded-full uppercase text-sm font-bold tracking-widest">
          Team Members
        </span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">Say Hello to Our Squad</h2>
        <p className="text-gray-400 mt-4">
          Get ready to meet the faces behind the magic, the dreamers, the doers,
          and the unstoppable force driving our success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-lg text-center flex flex-col justify-between group hover:shadow-xl transition-all"
          >
            {/* Image */}
            <div className="relative">
              <Image
                src="/unnamed.png"
                alt={member.name}
                width={100}
                height={500}
                className="w-full h-64 object-cover"
              />
              {/* Hover Social Icons */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full text-white hover:bg-orange-500"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full text-white hover:bg-orange-500"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="bg-gray-800 p-3 rounded-full text-white hover:bg-orange-500"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-orange-400 text-2xl font-bold">{member.highlight}</h3>
              <p className="text-gray-500 text-sm uppercase">{member.role}</p>
              <h4 className="mt-4 text-xl font-bold">{member.name}</h4>
              <p className="text-gray-400">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
