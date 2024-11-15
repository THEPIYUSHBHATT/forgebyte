"use client";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const handleSubmit = (e) => {
    e.preventDefault();
}

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-6 py-10 md:px-12">
            {/* lets talk */}

            <div className="h-3/4 bg-black p-4 md:p-8 flex flex-col justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    {/* Header Section */}
                    <div className="mb-8 md:mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="text-white">Lets</span>
                            <br />
                            <span className="text-orange-500">Talk!</span>
                        </h1>
                    </div>

                    {/* Form Section */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                                required
                            />
                        </div>

                        {/* Phone Input */}
                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                className="w-full px-4 py-3 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
                                required
                            />
                        </div>

                        {/* Message Input */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200 resize-none"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-black font-bold py-3 px-6 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black transition duration-200"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>


            {/* Contact Information */}
            <div className="md:grid-cols-2 lg:grid-cols-4 p-5 px-4 md:px-20 rounded-3xl gap-8 mb-8 bg-[#161616] flex flex-col md:flex-row md:justify-between">
                <div className="space-y-4">
                    <h3 className="text-orange-500 font-bold text-2xl lg:text-4xl">Contact Us</h3>
                    <div className="flex-col items-center lg:w-[400px] space-x-2 bg-[#222222] p-4 rounded-3xl">
                        <FaEnvelope className="text-orange-500 mx-2" />
                        <span>agencee@email.com</span>
                    </div>
                    <div className="flex-col items-center lg:w-[400px] space-x-2 bg-[#222222] p-4 rounded-3xl">
                        <FaPhone className="text-orange-500 mx-2" />
                        <span>+54 2541 22 55 66</span>
                    </div>
                    <div className="flex-col items-center lg:w-[400px] space-x-2 bg-[#222222] p-4 rounded-3xl">
                        <FaMapMarkerAlt className="text-orange-500 mx-2" />
                        <span>123 Main Street Anytown, USA, 2141</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:gap-32 mt-6 md:mt-0">
                    {/* Navigation Links */}
                    <div className="space-y-2">
                        <h3 className="text-orange-500 font-bold text-lg">Menu</h3>
                        <ul className="space-y-1">
                            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
                            <li><a href="#about" className="hover:text-orange-500">About</a></li>
                            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
                            <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
                            <li><a href="#blog" className="hover:text-orange-500">Blog</a></li>
                            <li><a href="#review" className="hover:text-orange-500">Review</a></li>
                            <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-2 mt-4 md:mt-0">
                        <h3 className="text-orange-500 font-bold text-lg">Services</h3>
                        <ul className="space-y-1">
                            <li><a href="#seo" className="hover:text-orange-500">SEO</a></li>
                            <li><a href="#content-marketing" className="hover:text-orange-500">Content Marketing</a></li>
                            <li><a href="#website-design" className="hover:text-orange-500">Website Design</a></li>
                            <li><a href="#social-media" className="hover:text-orange-500">Social Media Marketing</a></li>
                        </ul>
                    </div>

                    {/* Other Pages */}
                    <div className="space-y-2 mt-4 md:mt-0">
                        <h3 className="text-orange-500 font-bold text-lg">Other Pages</h3>
                        <ul className="space-y-1">
                            <li><a href="#license" className="hover:text-orange-500">License</a></li>
                            <li><a href="#404" className="hover:text-orange-500">404</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-8">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 bg-[#161616] py-10 px-5 rounded-3xl">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="#facebook" className="text-gray-300 hover:text-orange-500"><FaFacebook size={24} /></a>
                        <a href="#twitter" className="text-gray-300 hover:text-orange-500"><FaTwitter size={24} /></a>
                        <a href="#linkedin" className="text-gray-300 hover:text-orange-500"><FaLinkedin size={24} /></a>
                        <a href="#instagram" className="text-gray-300 hover:text-orange-500"><FaInstagram size={24} /></a>
                    </div>

                    {/* Newsletter Subscription */}
                    <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="email"
                            placeholder="name@email.com"
                            className="w-full sm:w-auto px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none"
                        />
                        <button className="bg-orange-500 text-black px-6 py-2 rounded-full font-semibold">
                            Subscribe for newsletter
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
