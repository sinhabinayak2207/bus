'use client';

import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/MainLayout';

// In a real application, this data would come from the Strapi CMS
const serviceCategories = [
  {
    id: 1,
    title: 'Daily School Bus Services',
    description: 'Regular pickup and drop-off services for students with fixed routes and schedules.',
    image: '/images/dailybusservice.jpg',
    slug: 'daily-school-bus',
    highlights: [
      'GPS tracking for real-time location updates',
      'Trained drivers and attendants on every bus',
      'Digital attendance system for student tracking',
    ],
  },
  {
    id: 2,
    title: 'Field Trip Transportation',
    description: 'Safe and reliable transportation for educational field trips and excursions.',
    image: '/images/field_trip_transport.jpg',
    slug: 'field-trip',
    highlights: [
      'Customized scheduling for field trips',
      'Experienced drivers familiar with local destinations',
      'Pre-trip vehicle inspection and safety checks',
    ],
  },
  {
    id: 3,
    title: 'Special Event Pickups',
    description: 'Transportation services for school events, competitions, and special occasions.',
    image: '/images/special-event.jpg',
    slug: 'special-event',
    highlights: [
      'Flexible scheduling for various event timings',
      'Multiple pickup and drop-off points',
      'Extended service hours for evening events',
    ],
  },
  {
    id: 4,
    title: 'Staff Shuttle Services',
    description: 'Dedicated transportation solutions for school staff and faculty members.',
    image: '/images/staff-shuttle.jpg',
    slug: 'staff-shuttle',
    highlights: [
      'Dedicated routes for staff residential areas',
      'Comfortable seating for professional commute',
      'Reduced carbon footprint through shared transport',
    ],
  },
];

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Transportation Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              We offer comprehensive school transportation solutions tailored to meet the specific needs of educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {serviceCategories.map((category, index) => (
              <div 
                key={category.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={600}
                      height={400}
                      style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                      className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.title}</h2>
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {category.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={`/services/${category.slug}`}
                    className="btn-primary"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Need a Custom Transportation Solution?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We understand that every school has unique transportation needs. Our team can work with you to develop a customized solution.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Consultation
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
