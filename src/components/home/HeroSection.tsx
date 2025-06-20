'use client';

import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative bg-blue-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-blue-100">
        {/* Using a background color instead of missing SVG pattern */}
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Safe School Transport Solutions
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Providing reliable, secure, and monitored transportation for schools with trained drivers, GPS tracking, and comprehensive safety measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Request Proposal
              </Link>
              <Link href="/services" className="btn-outline">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="bg-white rounded-full p-2 shadow-md">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="ml-2 text-gray-700">Trusted by 50+ educational institutions</span>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/homepage_cover.jpg"
                alt="School children boarding a safe bus"
                width={1200}
                height={600}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Safety First</p>
                  <p className="text-xs text-gray-500">CCTV & GPS Enabled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
