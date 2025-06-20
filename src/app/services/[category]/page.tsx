'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';

// In a real application, this data would come from the Strapi CMS
const serviceData = {
  'daily-school-bus': {
    title: 'Daily School Bus Services',
    description: 'Regular pickup and drop-off services for students with fixed routes and schedules.',
    image: '/images/daily-school-bus.jpg',
    features: [
      'Fixed routes and schedules for consistency',
      'GPS tracking for real-time location updates',
      'Trained drivers and attendants on every bus',
      'Digital attendance system for student tracking',
      'CCTV surveillance for enhanced safety',
      'Regular vehicle maintenance and safety checks',
    ],
    benefits: [
      'Reduced parent transportation burden',
      'Increased punctuality and attendance',
      'Enhanced student safety during transit',
      'Reduced traffic congestion around schools',
      'Environmentally friendly transportation option',
    ],
    faqs: [
      {
        question: 'How are the routes determined?',
        answer: 'Routes are carefully planned based on student addresses, traffic patterns, and school timings to ensure optimal efficiency and minimal travel time.',
      },
      {
        question: 'What safety measures are in place?',
        answer: 'Our buses are equipped with GPS tracking, CCTV cameras, first aid kits, and fire extinguishers. All drivers undergo rigorous background checks and safety training.',
      },
      {
        question: 'How do parents track the bus location?',
        answer: 'Parents receive access to our mobile app which provides real-time location updates and notifications when the bus is approaching their stop.',
      },
    ],
  },
  'field-trip': {
    title: 'Field Trip Transportation',
    description: 'Safe and reliable transportation for educational field trips and excursions.',
    image: '/images/field-trip.jpg',
    features: [
      'Customized scheduling for field trips',
      'Experienced drivers familiar with local destinations',
      'Comfortable seating for longer journeys',
      'Additional storage space for equipment',
      'Pre-trip vehicle inspection and safety checks',
      'Flexible pickup and drop-off locations',
    ],
    benefits: [
      'Simplified logistics for school administrators',
      'Consistent transportation experience',
      'Enhanced safety for off-campus activities',
      'Cost-effective solution for group transportation',
      'Reliable scheduling and timing',
    ],
    faqs: [
      {
        question: 'How far in advance should we book field trip transportation?',
        answer: 'We recommend booking at least 3-4 weeks in advance, especially during peak seasons. For larger groups or longer distances, earlier booking is advisable.',
      },
      {
        question: 'Can we request specific amenities for longer trips?',
        answer: 'Yes, we offer buses with various amenities including air conditioning, comfortable seating, and storage space. Special requirements can be accommodated with advance notice.',
      },
      {
        question: 'What happens in case of bad weather?',
        answer: 'Our operations team monitors weather conditions and will communicate with school administrators about any necessary schedule changes or safety concerns.',
      },
    ],
  },
  'special-event': {
    title: 'Special Event Pickups',
    description: 'Transportation services for school events, competitions, and special occasions.',
    image: '/images/special-event.jpg',
    features: [
      'Flexible scheduling for various event timings',
      'Multiple pickup and drop-off points',
      'Capacity for equipment transportation',
      'Extended service hours for evening events',
      'Coordination with event organizers',
      'Quick response to schedule changes',
    ],
    benefits: [
      'Simplified logistics for special events',
      'Reduced parking concerns at event venues',
      'Consistent group arrival and departure',
      'Enhanced safety for students during non-standard hours',
      'Professional representation at interschool events',
    ],
    faqs: [
      {
        question: 'Can buses be arranged for weekend events?',
        answer: 'Yes, we provide services seven days a week, including weekends and holidays, subject to availability.',
      },
      {
        question: 'How do you handle late-night returns from events?',
        answer: 'Our service includes late-night operations with additional safety protocols including enhanced communication with parents and school administrators.',
      },
      {
        question: 'Can we change the number of buses needed closer to the event date?',
        answer: 'We understand that event participation can fluctuate. Changes can be accommodated with advance notice, typically at least 72 hours before the event.',
      },
    ],
  },
  'staff-shuttle': {
    title: 'Staff Shuttle Services',
    description: 'Dedicated transportation solutions for school staff and faculty members.',
    image: '/images/staff-shuttle.jpg',
    features: [
      'Dedicated routes for staff residential areas',
      'Flexible scheduling aligned with staff timings',
      'Comfortable seating for professional commute',
      'Reduced carbon footprint through shared transport',
      'Reliable service regardless of weather conditions',
      'Optional express routes with limited stops',
    ],
    benefits: [
      'Improved staff punctuality and attendance',
      'Reduced parking requirements on campus',
      'Enhanced staff satisfaction and retention',
      'Environmentally responsible transportation option',
      'Cost savings for staff on commuting expenses',
    ],
    faqs: [
      {
        question: 'How are staff shuttle routes determined?',
        answer: 'Routes are designed based on staff residential clusters, with input from school administration to ensure optimal coverage and efficiency.',
      },
      {
        question: 'Can staff use the shuttle service occasionally rather than daily?',
        answer: 'Yes, we offer flexible usage options including daily passes and multi-day packages to accommodate varying staff needs.',
      },
      {
        question: 'Is there a minimum number of staff required to establish a shuttle service?',
        answer: 'While efficiency increases with more participants, we can design custom solutions for schools of all sizes, starting with compact vehicles for smaller groups.',
      },
    ],
  },
};

export default function ServiceCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  
  // In a real application, we would fetch this data from Strapi CMS
  const service = serviceData[category] || {
    title: 'Service Not Found',
    description: 'The requested service category does not exist.',
    image: '/images/placeholder.jpg',
    features: [],
    benefits: [],
    faqs: [],
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold text-blue-900 mb-4">{service.title}</h1>
              <p className="text-lg text-gray-700 mb-6">{service.description}</p>
              <Link href="/contact" className="btn-primary">
                Request Information
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Service Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {service.faqs.map((faq, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to learn more about our {service.title}?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can customize our services to meet your school's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-2 px-6 rounded-full transition-colors duration-300 inline-flex items-center justify-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
