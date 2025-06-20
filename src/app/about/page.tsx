'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Dusker</h1>
            <p className="text-lg text-gray-700 mb-8">
              Your trusted partner in safe, reliable, and efficient school transportation services since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative h-96 w-full rounded-xl overflow-hidden">
                  <Image
                    src="/images/about-us-team.jpg"
                    alt="SafeBus company history"
                    width={1200}
                    height={600}
                    style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2005 by transportation industry veterans, SafeBus began with a simple mission: to provide the safest and most reliable school transportation services in the region.
                </p>
                <p className="text-gray-700 mb-4">
                  What started with just 5 buses and a commitment to excellence has grown into a fleet of over 200 vehicles serving dozens of school districts across the state. Throughout our growth, we&apos;ve maintained our core values of safety, reliability, and exceptional service.
                </p>
                <p className="text-gray-700">
                  Today, we&apos;re proud to be a leader in school transportation innovation, continuously investing in the latest safety technology, driver training, and environmentally friendly vehicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-700">
              At SafeBus, everything we do is guided by our commitment to safety, reliability, and service excellence.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Safety First</h3>
              <p className="text-gray-700">
                Safety is non-negotiable. We implement rigorous safety protocols, regular training, and cutting-edge technology to ensure the wellbeing of every student we transport.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Reliability</h3>
              <p className="text-gray-700">
                We understand that punctuality and consistency are essential for schools and families. Our commitment to reliability means you can count on us every day, in all conditions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Innovation</h3>
              <p className="text-gray-700">
                We continuously invest in the latest technology and practices to improve our service, from route optimization software to eco-friendly vehicles and advanced safety features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-700">
              Meet the experienced professionals who guide our company's vision and operations.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leadership Team Member 1 */}
            <div className="text-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/ashish_kar.jpg" 
                  alt="Ashish Kar, CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Ashish kar</h3>
              <p className="text-blue-600 mb-3">Chief Executive Officer</p>
              <p className="text-gray-700">
                With over 25 years in transportation management, Ashish leads our company with a focus on safety innovation and operational excellence.
              </p>
              <div className="mt-3 text-blue-600">
                <p><a href="mailto:ashishkar543@gmail.com">ashishkar543@gmail.com</a></p>
                <p><a href="tel:+916201647596">+91 6201647596</a></p>
              </div>
            </div>
            
            {/* Leadership Team Member 2 */}
            <div className="text-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/raj_shrivastava.jpg" 
                  alt="Raj Shrivastava, Business development Executive" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Raj Shrivastava</h3>
              <p className="text-blue-600 mb-3">Business development Executive</p>
              <p className="text-gray-700">
                Raj oversees our daily operations, ensuring that every route runs smoothly and every safety protocol is followed to the letter.
              </p>
              <div className="mt-3 text-blue-600">
                <p><a href="mailto:Rajranjansrivastav@gmail.com">Rajranjansrivastav@gmail.com</a></p>
                <p><a href="tel:+916203425127">+91 6203425127</a></p>
              </div>
            </div>
            
            {/* Leadership Team Member 3 */}
            <div className="text-center">
              <div className="relative h-64 w-64 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="/images/tejaswi_sinha.jpg" 
                  alt="Tejaswi Sinha, Business development Executive" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">Tejaswi Sinha</h3>
              <p className="text-blue-600 mb-3">Business development Executive</p>
              <p className="text-gray-700">
                Tejaswi ensures our clients receive exceptional service and builds lasting relationships with schools and institutions.
              </p>
              <div className="mt-3 text-blue-600">
                <p><a href="mailto:sinha.vinayak2207@gmail.com">sinha.vinayak2207@gmail.com</a></p>
                <p><a href="tel:+919113166099">+91 9113166099</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to partner with SafeBus?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join the hundreds of schools that trust us with their most precious cargo. Contact us today to learn how we can serve your transportation needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link href="/services" className="btn-outline-white">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
