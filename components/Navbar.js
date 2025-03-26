'use client'; // Required for client-side interactivity in App Router

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black text-white z-20 shadow-lg overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-500/20 via-transparent to-blue-500/20 animate-gradient-shift" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] opacity-10" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 bg-yellow-400 opacity-5 rounded-full blur-3xl absolute top-0 left-1/4 animate-pulse-slow" />
        <div className="w-72 h-72 bg-blue-400 opacity-5 rounded-full blur-3xl absolute bottom-0 right-1/4 animate-pulse-slow delay-1000" />
      </div>

      {/* Navbar Content */}
      <div className="relative container mx-auto flex justify-between items-center p-4 z-10">
        {/* Logo with Camera Lens Effect */}
        <Link
          href="/"
          className="relative text-3xl font-extralight text-white tracking-widest hover:text-yellow-300 transition-all duration-300 group"
        >
          <span className="relative z-10">Ashu's</span>
          <span className="absolute inset-0 rounded-full border-2 border-dashed border-gray-700 opacity-50 group-hover:opacity-100 group-hover:border-yellow-300 transition-all duration-300 -z-10" />
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 transition-transform duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className="rotate-180"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-lg font-light text-white hover:text-yellow-300 transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </Link>
          {/* <Link
            href="/gallery"
            className="text-lg font-light text-white hover:text-yellow-300 transition-all duration-300 relative group"
          >
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </Link> */}
          <Link
            href="/about"
            className="text-lg font-light text-white hover:text-yellow-300 transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link
            href="/contact"
            className="text-lg font-light text-white hover:text-yellow-300 transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          } md:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-black to-gray-900 flex flex-col items-center space-y-6 py-6 transform origin-top transition-all duration-300 ease-in-out`}
        >
          <Link
            href="/"
            className="text-xl font-light text-white hover:text-yellow-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/gallery"
            className="text-xl font-light text-white hover:text-yellow-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="text-xl font-light text-white hover:text-yellow-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl font-light text-white hover:text-yellow-300 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}