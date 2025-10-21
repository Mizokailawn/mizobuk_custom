'use client'; // if you're using App Router

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" sticky bg-black text-white p-4 border-b-1 border-opacity-5 border-neon-orange relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/MizoBuk Official LOGO.png" width={28} height={28} alt="Logo" className="h-7 w-7" />
          <span className="text-xl font-bold">MizoBuk</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:space-x-10">
        <Link href="#" className="hover:text-orange-400 text-gray-100">Home</Link>
        <Link href="#" className="hover:text-orange-400 text-gray-100">Categories</Link>
        <Link href="#" className="hover:text-orange-400 text-gray-100">Sign in</Link>
        <button className="button-primary">
            Add My Store
        </button>
        </div>

        {/* Burger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          <div className="flex flex-col justify-center items-center h-7 w-7 space-y-1 cursor-pointer">
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>

          {/*<svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>*/}
        </button>
      </div>

      

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-4 w-56 bg-black rounded-xl  shadow-orange shadow-lg p-4 mt-2 border-neon-orange border-1 space-y-5">
          <ul className="space-y-5">
            <li>
              <Link href="/categories" className="hover:text-orange-400">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/signin" className="hover:text-orange-400">
                Sign In
              </Link>
            </li>
          </ul>
          <button className="button-primary w-full cursor-pointer">
            Add My Store
          </button>
        </div>
      )}
    </header>
  );
}