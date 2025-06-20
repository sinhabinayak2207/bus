'use client';

import Link from 'next/link';
import Image from 'next/image';

// In a real application, this data would come from the Strapi CMS
const serviceCategories = [
  {
    id: 1,
    title: 'Daily School Bus Services',
    description: 'Regular pickup and drop-off services for students with fixed routes and schedules.',
    image: '/images/dailybusservice.jpg',
    slug: 'daily-school-bus',
  },
  {
    id: 2,
    title: 'Field Trip Transportation',
    description: 'Safe and reliable transportation for educational field trips and excursions.',
    image: '/images/field_trip_transport.jpg',
    slug: 'field-trip',
  },
  {
    id: 3,
    title: 'Special Event Pickups',
    description: 'Transportation services for school events, competitions, and special occasions.',
    image: '/images/special-event.jpg',
    slug: 'special-event',
  },
  {
    id: 4,
    title: 'Staff Shuttle Services',
    description: 'Dedicated transportation solutions for school staff and faculty members.',
    image: '/images/staff-shuttle.jpg',
    slug: 'staff-shuttle',
  },
];

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Transportation Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive school transportation solutions tailored to meet the specific needs of educational institutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category) => (
            <Link 
              href={`/services/${category.slug}`} 
              key={category.id}
              className="card group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
