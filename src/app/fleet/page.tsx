'use client';

import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

// In a real application, this data would come from the Strapi CMS
const fleetVehicles = [
  {
    id: 1,
    name: 'Standard School Bus',
    description: 'Our standard yellow school buses are equipped with modern safety features and comfortable seating for students of all ages.',
    image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    capacity: '44-48 students',
    features: [
      'GPS tracking system',
      'CCTV surveillance cameras',
      'First aid kit and fire extinguisher',
      'Seat belts for all passengers',
      'Air conditioning',
      'PA system',
    ],
    specifications: {
      length: '35 feet',
      engine: 'Fuel-efficient diesel',
      safety: 'Meets all federal safety standards',
      accessibility: 'Available with wheelchair lift option',
    },
  },
  {
    id: 2,
    name: 'Mini School Bus',
    description: 'Compact and versatile buses ideal for smaller groups, special education routes, or navigating narrow streets.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    capacity: '16-24 students',
    features: [
      'GPS tracking system',
      'CCTV surveillance cameras',
      'First aid kit and fire extinguisher',
      'Seat belts for all passengers',
      'Air conditioning',
      'Enhanced maneuverability',
    ],
    specifications: {
      length: '22-25 feet',
      engine: 'Eco-friendly diesel',
      safety: 'Exceeds federal safety standards',
      accessibility: 'Available with wheelchair lift option',
    },
  },
  {
    id: 3,
    name: 'Activity Bus',
    description: 'Designed for longer trips and field excursions with enhanced comfort features for extended travel.',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    capacity: '44-52 students',
    features: [
      'GPS tracking system',
      'CCTV surveillance cameras',
      'First aid kit and fire extinguisher',
      'Seat belts for all passengers',
      'Enhanced air conditioning',
      'Comfortable reclining seats',
      'Overhead storage compartments',
      'Optional Wi-Fi connectivity',
    ],
    specifications: {
      length: '36-40 feet',
      engine: 'High-efficiency diesel',
      safety: 'Exceeds federal safety standards',
      accessibility: 'Available with wheelchair lift option',
    },
  },
  {
    id: 4,
    name: 'Staff Shuttle Van',
    description: 'Comfortable and professional transportation solution specifically designed for school staff and faculty.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    capacity: '12-15 adults',
    features: [
      'GPS tracking system',
      'Professional interior design',
      'Comfortable captain seats',
      'Air conditioning',
      'Reading lights',
      'Optional Wi-Fi connectivity',
    ],
    specifications: {
      length: '20-22 feet',
      engine: 'Fuel-efficient gasoline or hybrid',
      safety: 'Advanced driver assistance systems',
      accessibility: 'Available with accessibility features',
    },
  },
];

export default function FleetPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Modern Fleet</h1>
            <p className="text-lg text-gray-700 mb-8">
              SafeBus maintains a diverse fleet of well-maintained vehicles designed to meet various transportation needs of educational institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Fleet Overview</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our fleet consists of modern, well-maintained vehicles that undergo rigorous safety inspections and regular maintenance. All vehicles are equipped with GPS tracking, CCTV cameras, and safety features that exceed industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {fleetVehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id} 
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{vehicle.name}</h3>
                  <p className="text-gray-700 mb-4">{vehicle.description}</p>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Capacity: {vehicle.capacity}
                    </span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Specifications:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Length</p>
                        <p className="text-gray-700">{vehicle.specifications.length}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Engine</p>
                        <p className="text-gray-700">{vehicle.specifications.engine}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Safety Rating</p>
                        <p className="text-gray-700">{vehicle.specifications.safety}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">Accessibility</p>
                        <p className="text-gray-700">{vehicle.specifications.accessibility}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Our Maintenance Standards</h2>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Regular Maintenance Schedule</h3>
              <p className="text-gray-700 mb-4">
                Every vehicle in our fleet undergoes a comprehensive maintenance check according to a strict schedule that exceeds manufacturer recommendations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Daily pre-trip and post-trip inspections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly comprehensive mechanical checks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly detailed service by certified mechanics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quarterly safety certification and compliance review</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Cleanliness & Hygiene</h3>
              <p className="text-gray-700 mb-4">
                We maintain the highest standards of cleanliness and hygiene for all our vehicles to ensure a healthy environment for students and staff.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Daily interior cleaning and sanitization</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Weekly deep cleaning of all surfaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Use of child-safe, environmentally friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular air filter replacement and ventilation system maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Tour Our Fleet?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            We invite school administrators to schedule a visit to our facility to inspect our fleet and learn more about our safety protocols and maintenance standards.
          </p>
          <Link href="/contact" className="btn-secondary">
            Schedule a Fleet Tour
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}