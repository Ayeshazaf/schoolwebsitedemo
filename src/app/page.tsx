import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="w-full bg-white py-8 px-4 sm:px-8 md:px-12 flex flex-col items-center min-h-[90vh] justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* Left Content */}
        <div className="flex-1 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
            Empowering You<br />
            with Digital <span className="text-orange-500">Skills</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 max-w-md">
            Our platform makes education flexible and convenient, so you can achieve your goals whenever and wherever you choose.
          </p>
          <div className="flex items-center gap-4 mb-5">
            <Link href="/courses" className="inline-flex">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition text-base shadow">
                Join Our Course
              </button>
            </Link>
            <button className="flex items-center gap-2 text-gray-700 font-medium hover:text-orange-500 transition">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="orange">
                  <polygon points="6,4 16,10 6,16" />
                </svg>
              </span>
              <span className="text-base">Watch how it works</span>
            </button>
          </div>
          {/* Avatars and rating */}
          <div className="flex items-center gap-3 mt-2">
            {/* Avatars with group icon */}
            <div className="flex items-center gap-2">
              <span className="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 8v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a6 6 0 0112 0z" />
                </svg>
              </span>
              <div className="flex -space-x-3">
                <Image src="https://randomuser.me/api/portraits/men/32.jpg" alt="user1" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <Image src="https://randomuser.me/api/portraits/women/44.jpg" alt="user2" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <Image src="https://randomuser.me/api/portraits/men/45.jpg" alt="user3" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <Image src="https://randomuser.me/api/portraits/women/65.jpg" alt="user4" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                <Image src="https://randomuser.me/api/portraits/men/77.jpg" alt="user5" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
              </div>
            </div>
            {/* Rating */}
            <div className="flex flex-col items-start ml-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
                <span className="font-semibold text-gray-800 text-xs">(4.5)</span>
              </div>
              <span className="text-xs text-gray-500">1000+ Review of our course</span>
            </div>
          </div>
        </div>
        {/* Right Content (Image placeholder) */}
        <div className="flex-1 flex flex-col items-center relative w-full">
          {/* Image Placeholder - smaller and styled */}
          <div className="w-48 h-56 sm:w-56 sm:h-64 md:w-60 md:h-72 bg-gray-100 rounded-2xl shadow-lg flex items-center justify-center overflow-hidden border border-orange-100">
            <span className="text-gray-400 text-base">[ Place your image here ]</span>
          </div>
        </div>
      </div>     
    </section>

    {/* Stats Section */}
    <section className="w-full bg-gradient-to-b from-white to-orange-50 py-10 px-4 flex flex-col items-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 w-full mb-8">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-900">1K <span className="text-4xl font-semibold">+</span></span>
            <span className="text-gray-500 text-lg mt-1 pr-4">Tutors</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-orange-500">3K <span className="text-4xl font-semibold">+</span></span>
            <span className="text-gray-500 text-lg mt-1 pr-4">Subjects</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-gray-900">15K <span className="text-4xl font-semibold">+</span></span>
            <span className="text-gray-500 text-lg mt-1 pr-4">Students</span>
          </div>
        </div>
      </div>

      {/* Learning Opportunity Section */}
      <div className="w-full max-w-4xl mx-auto mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Our Learning <span className="text-orange-500">Opportunity</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-50 text-orange-400 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">Personal Development</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">Graphic Design</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-50 text-orange-400 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">Digital Marketing</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-50 text-orange-400 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">IT & Software</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">UI/UX Design</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="border rounded-lg p-4 bg-white flex items-center gap-3 shadow-sm">
            <span className="bg-orange-50 text-orange-400 rounded-full p-2 flex items-center justify-center">
              {/* Placeholder for icon/image */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.5a2.121 2.121 0 113 3L7 19.5 3 21l1.5-4L16.5 3.5z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">Web Development</div>
              <div className="text-xs text-gray-500">320 Course</div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* Services Section */}
    <section className="w-full bg-orange-50 py-14 px-4 flex flex-col items-center" id="services">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Services
        </h2>
        <div className="w-16 h-1 bg-orange-500 rounded mb-6"></div>
        <p className="text-gray-600 text-base md:text-lg mb-10 max-w-3xl">
          At E-Learn, we ensure to compete with the ever-challenging and diverse market of different platforms such as Websites, Google Play Store and Apple App Store by our innovative, creative and eye-catching applications and games. We believe in the excellence of our products through our best professional team.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Game Development */}
          <div className="bg-white rounded-2xl shadow p-7 flex flex-col items-start hover:shadow-lg transition">
            <span className="bg-orange-500 text-white rounded-full p-3 mb-5 flex items-center justify-center">
              {/* Game icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 21 12 17.27 7.82 21 9 12.91l-5-3.64 5.91-.91z" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Game Development</h3>
            <p className="text-gray-600 text-sm">
              We are passionate about creating games that are not only visually stunning but also engaging and immersive. Our team uses the latest technologies and industry trends to develop games for various platforms.
            </p>
          </div>
          {/* Data Science */}
          <div className="bg-white rounded-2xl shadow p-7 flex flex-col items-start hover:shadow-lg transition">
            <span className="bg-orange-500 text-white rounded-full p-3 mb-5 flex items-center justify-center">
              {/* Data icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8M12 8v8" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science</h3>
            <p className="text-gray-600 text-sm">
              We use cutting-edge data analysis tools to help clients make data-driven decisions. Our team is experienced in using statistical models and machine learning algorithms to extract meaningful insights.
            </p>
          </div>
          {/* Web Development */}
          <div className="bg-white rounded-2xl shadow p-7 flex flex-col items-start hover:shadow-lg transition">
            <span className="bg-orange-500 text-white rounded-full p-3 mb-5 flex items-center justify-center">
              {/* Web icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4M16 2v4M2 8h20" />
              </svg>
            </span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm">
              We specialize in creating dynamic and responsive websites tailored to meet the specific needs of our clients, using modern frameworks and best practices.
            </p>
          </div>       
        </div>
      </div>
    </section>

    <section className="w-full py-14 px-4 flex flex-col items-center">
       {/* Get in Touch Card */}
        <div className="mb-12 flex flex-col md:flex-row items-stretch gap-6 max-w-6xl w-full mx-auto">
          {/* Card Content */}
          <div className="flex-1 bg-[#24928F] rounded-2xl p-8 flex flex-col justify-center relative min-h-[180px]">
            <div>
              <span className="text-orange-400 font-semibold text-lg">Get in Touch</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-2 mb-2 leading-tight">Join our community<br />of school partners</h2>
              <p className="text-white/80 text-sm md:text-base max-w-md">Looking to become a substitute teacher? Our Education is now servicing the greater Chicago area!</p>
            </div>
            {/* Arrow and Star icons */}
            <div className="absolute top-6 right-6 flex flex-col items-end gap-4">
              <span className="bg-[#24928F] rounded-lg p-2 border-2 border-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
              <span className="mt-8">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#F59E42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M24 6v36M6 24h36M12.5 12.5l23 23M35.5 12.5l-23 23"/></svg>
              </span>
            </div>
          </div>
        </div>
    </section>
    </>
  );
}