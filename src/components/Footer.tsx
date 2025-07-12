import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-orange-100 border-gray-200 pt-10 pb-25 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        {/* Left: Logo and nav */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <span className="inline-block w-2 h-6 rounded bg-orange-400 mr-1"></span>
            <span className="text-2xl font-bold text-gray-800">Edu<span className="text-black">Learn</span></span>
          </div>
          {/* Nav links */}
          <nav className="flex gap-6 text-gray-500 text-base font-medium">
            <Link href="#" className="hover:text-orange-500">Find Sub</Link>
            <Link href="#" className="hover:text-orange-500">For School</Link>
            <Link href="#" className="hover:text-orange-500">Resource</Link>
            <Link href="#" className="hover:text-orange-500">About Us</Link>
          </nav>
        </div>
        {/* Subscribe Button */}
        <div className="flex-shrink-0">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-2 rounded transition">Subscribe Now</button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-6 gap-4">
        {/* Copyright */}
        <div className="text-gray-500 text-sm">© copyright swing.co 2023. All Rights Reserved</div>
        {/* Social icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" aria-label="Instagram" className="bg-[#24928F] rounded-full p-2 text-white hover:bg-orange-400 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><circle cx="12" cy="12" r="5" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="bg-[#24928F] rounded-full p-2 text-white hover:bg-orange-400 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><path d="M15 8h-2a1 1 0 00-1 1v2h3l-.5 3h-2.5v6" strokeWidth="2"/></svg>
          </a>
          <a href="#" aria-label="Twitter" className="bg-[#24928F] rounded-full p-2 text-white hover:bg-orange-400 transition">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2"/><path d="M8 19c7.5 0 11.5-6.2 11.5-11.5v-.5A8.2 8.2 0 0022 4.5a8.1 8.1 0 01-2.36.65A4.1 4.1 0 0021.5 3a8.2 8.2 0 01-2.6 1A4.1 4.1 0 0012 8.5c0 .32.04.64.1.94A11.6 11.6 0 013 4.5s-4 9 5 13.5c-1.5 1-3.5 1.5-5 1.5" strokeWidth="2"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
