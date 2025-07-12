"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return (
    <nav className="bg-gradient-to-b from-orange-50 to-white top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="flex items-center gap-2 text-xl font-bold text-gray-800">
              <span className="font-bold">E-Learn</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className={`${pathname === '/' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Home</Link>
            <Link href="/#services" className={`${pathname === '/services' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Services</Link>
            <Link href="/courses" className={`${pathname === '/courses' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Courses</Link>
            <Link href="#" className={`${pathname === '/contact' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Contact Us</Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Cart Icon */}
            <button
              className="hidden md:inline-flex text-gray-600 hover:text-orange-500"
              title="View cart"
              aria-label="View cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385a2.25 2.25 0 002.183 1.693h7.063a2.25 2.25 0 002.183-1.693l1.7-6.385m-13.112 0h13.112" />
                <circle cx="9" cy="20" r="1.25" />
                <circle cx="17" cy="20" r="1.25" />
              </svg>
            </button>
            {/* User Icon */}
            <button
              className="hidden md:inline-flex text-gray-600 hover:text-orange-500"
              title="View account"
              aria-label="View account"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
              </svg>
            </button>
            {/* Get A Quote Button */}
            <button className="hidden md:inline-flex bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 transition">Get A Quote</button>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-orange-500 focus:outline-none"
              aria-label="Open main menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-sm px-4 pb-4">
          <div className="flex flex-col gap-4 mt-2">
            <Link href="/" className={`${pathname === '/' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Home</Link>
            <Link href="/courses" className={`${pathname === '/courses' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Courses</Link>
            <Link href="#" className={`${pathname === '/services' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Services</Link>
            <Link href="#" className={`${pathname === '/contact' ? 'text-orange-500 font-semibold underline underline-offset-4 decoration-orange-400' : 'text-gray-700 hover:text-orange-500 transition'}`}>Contact Us</Link>
            <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385a2.25 2.25 0 002.183 1.693h7.063a2.25 2.25 0 002.183-1.693l1.7-6.385m-13.112 0h13.112" />
                <circle cx="9" cy="20" r="1.25" />
                <circle cx="17" cy="20" r="1.25" />
              </svg>
              Cart
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
              </svg>
              Account
            </button>
            <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 rounded transition">Get A Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
}