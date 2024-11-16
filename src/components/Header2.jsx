"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { label: 'HOME', path: '/', active: true },
        { label: 'ABOUT', path: '/about' },
        { label: 'SERVICES', path: '/services' },
        { label: 'PROJECTS', path: '/projects' },
        { label: 'TESTIMONIALS', path: '/reviews' },
        
        { label: 'CONTACT', path: '/contact' },
    ];

    return (
        <header className="bg-black py-4 px-6 fixed w-full top-0 z-50">
            <div className=" mx-auto">
                <nav className="flex items-center lg:justify-around justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold">
                            <span className="text-orange-500">F</span>
                            <span className="text-white">ORGEBYTE</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 border-2 p-5 rounded-full">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.path}
                                className={`text-sm font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : 'text-white hover:text-orange-500'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Template Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/template"
                            className="bg-orange-500 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-orange-600 transition-colors duration-200"
                        >
                            <span>TEMPLATE</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.path}
                                    className={`text-sm font-medium transition-colors duration-200 ${item.active ? 'text-orange-500' : 'text-white hover:text-orange-500'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link
                                href="/template"
                                className="bg-orange-500 text-white px-6 py-2 rounded-full inline-flex items-center justify-center space-x-2 hover:bg-orange-600 transition-colors duration-200"
                            >
                                <span>TEMPLATE</span>
                                <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;