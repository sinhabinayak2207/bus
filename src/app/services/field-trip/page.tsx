'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FaqAccordion from '@/components/services/FaqAccordion';
import TestimonialSlider from '@/components/services/TestimonialSlider';
import BenefitCard from '@/components/services/BenefitCard';
import ServiceOption from '@/components/services/ServiceOption';
import ComfortFeature from '@/components/services/ComfortFeature';
import ServiceFeature from '@/components/services/ServiceFeature';
import FleetGallery from '@/components/services/FleetGallery';

export default function FieldTripPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [animateSection, setAnimateSection] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateSection(true);
  }, []);
  
  // Fleet images data
  const fleetImages = [
    {
      src: "/images/fleet/field-trip-1.jpg",
      alt: "Modern coach bus for field trips"
    },
    {
      src: "/images/fleet/field-trip-2.jpg",
      alt: "Interior view of field trip bus with comfortable seating"
    },
    {
      src: "/images/fleet/field-trip-3.jpg",
      alt: "School bus with students boarding for field trip"
    },
    {
      src: "/images/fleet/field-trip-4.jpg",
      alt: "Field trip bus with storage compartments"
    }
  ];
  
  // Safety approach data
  const safetyApproach = {
    title: "Safety First Approach",
    description: "Every field trip begins with safety as our top priority:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'></path></svg>",
    color: "bg-red-600",
    items: [
      "Comprehensive pre-trip vehicle inspections",
      "First aid kits and emergency protocols",
      "Communication systems for continuous contact",
      "Detailed attendance and check-in procedures",
      "Driver background checks and safety training",
      "Emergency evacuation procedures and drills"
    ]
  };
  
  // Popular destinations data
  const popularDestinations = {
    title: "Popular Destinations We Serve",
    description: "Our field trip transportation services regularly transport students to:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'></path><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'></path></svg>",
    color: "bg-blue-600",
    items: [
      "Museums and science centers",
      "Historical sites and landmarks",
      "Nature preserves and outdoor education centers",
      "Performing arts venues",
      "Sporting events and competitions",
      "Community service locations",
      "Amusement parks and recreational facilities"
    ]
  };
  
  // Benefits data
  const benefits = [
    {
      title: "Educational Enrichment",
      description: "Enhance classroom learning with real-world experiences and explorations.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'></path></svg>",
      color: "bg-blue-600"
    },
    {
      title: "Experienced Drivers",
      description: "Professional drivers trained specifically for student transportation and field trips.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path></svg>",
      color: "bg-green-600"
    },
    {
      title: "Flexible Scheduling",
      description: "Accommodating various trip durations, from half-day local visits to multi-day excursions.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>",
      color: "bg-yellow-600"
    },
    {
      title: "Modern Fleet",
      description: "Well-maintained, comfortable buses with amenities perfect for educational outings.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'></path></svg>",
      color: "bg-red-600"
    }
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Mrs. Verma",
      role: "Science Teacher",
      content: "Our annual science museum trip was perfectly organized. The buses arrived on time and the drivers were professional and patient with our excited students.",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Mr. Kapoor",
      role: "School Principal",
      content: "Dusker has been our go-to transportation provider for all field trips for the past 3 years. Their service is consistently excellent and reliable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Ms. Gupta",
      role: "History Teacher",
      content: "The comfort of the buses made our long journey to the historical site enjoyable. Students arrived fresh and ready to learn.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How far in advance should we book field trip transportation?",
      answer: "We recommend booking at least 4-6 weeks in advance for regular field trips, and 2-3 months ahead for peak season trips (spring and fall) or for destinations requiring long-distance travel."
    },
    {
      question: "Can you accommodate special equipment for field trips?",
      answer: "Yes, our buses have storage compartments for equipment like science project materials, sports gear, musical instruments, and more. Just let us know your requirements when booking."
    },
    {
      question: "What happens in case of bad weather?",
      answer: "Safety is our priority. We monitor weather conditions closely and will coordinate with school administration regarding any schedule changes or cancellations. We offer flexible rescheduling options for weather-related cancellations."
    },
    {
      question: "Do you provide transportation for overnight field trips?",
      answer: "Yes, we offer services for multi-day excursions. Our drivers are experienced with overnight trips and can accommodate various itineraries and schedules."
    }
  ];
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Field Trip Transportation</h1>
            <p className="text-lg text-gray-700 mb-8">
              Safe and reliable transportation for educational field trips and excursions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Left Column - Content */}
            <div className="md:w-2/3">
              <div className="prose max-w-none">
                <h2 className={`text-3xl font-bold mb-6 transition-all duration-700 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Educational Excursions Made Easy
                </h2>
                <div className={`mb-8 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="text-lg">
                    Field trips are an essential part of the educational experience, providing students with hands-on 
                    learning opportunities outside the classroom. Our Field Trip Transportation service ensures that 
                    these valuable experiences are supported by safe, comfortable, and reliable transportation.
                  </p>
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Key Benefits of Our Field Trip Service
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={benefit.title}
                      className={`transition-all duration-700 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
                      style={{ transitionDelay: `${300 + (index * 100)}ms` }}
                    >
                      <BenefitCard 
                        title={benefit.title}
                        description={benefit.description}
                        icon={benefit.icon}
                        color={benefit.color}
                      />
                    </div>
                  ))}
                </div>
                
                {/* Interactive Service Options with expandable sections */}
                <div className={`mt-8 mb-10 transition-all duration-700 delay-700 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Explore Our Field Trip Services</h3>
                  <div className="space-y-3">
                    <ServiceOption
                      title="Day Trip Services"
                      description="Perfect for museums, parks, and local attractions. Our day trip services include morning pickup and afternoon return with flexible scheduling to accommodate your itinerary."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'></path></svg>"
                    />
                    <ServiceOption
                      title="Multi-Day Excursions"
                      description="For longer educational journeys, our multi-day excursion service provides reliable transportation throughout your trip with experienced drivers familiar with overnight stays and complex itineraries."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>"
                    />
                    <ServiceOption
                      title="Sports Team Transportation"
                      description="Specialized service for sports teams with extra space for equipment and gear. We coordinate with athletic departments to ensure timely arrivals for games and tournaments."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'></path></svg>"
                    />
                    <ServiceOption
                      title="Cultural & Arts Excursions"
                      description="Tailored transportation for visits to theaters, museums, and cultural events with flexible scheduling to accommodate performance times and exhibition hours."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'></path></svg>"
                    />
                  </div>
                </div>

                <div className={`space-y-6 transition-all duration-700 delay-900 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <h3 className="text-2xl font-bold mb-6">
                    Field Trip Essentials
                  </h3>
                  
                  <ServiceFeature
                    title={safetyApproach.title}
                    description={safetyApproach.description}
                    items={safetyApproach.items}
                    icon={safetyApproach.icon}
                    color={safetyApproach.color}
                  />
                  
                  <div className="h-4"></div>
                  
                  <ServiceFeature
                    title={popularDestinations.title}
                    description={popularDestinations.description}
                    items={popularDestinations.items}
                    icon={popularDestinations.icon}
                    color={popularDestinations.color}
                  />
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="btn-primary">
                  Request Field Trip Quote
                </Link>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:w-1/3">
              {/* Interactive Tab Navigation */}
              <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
                <button 
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === 'features' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('features')}
                >
                  Features
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === 'testimonials' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('testimonials')}
                >
                  Reviews
                </button>
                <button 
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === 'faq' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('faq')}
                >
                  FAQs
                </button>
              </div>
              
              {/* Features Tab Content */}
              <div className={`${activeTab === 'features' ? 'block' : 'hidden'}`}>
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Service Highlights</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive pre-trip vehicle inspections</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comfortable buses with climate control</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Experienced drivers familiar with educational destinations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Storage space for equipment and materials</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible scheduling for day and overnight trips</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Testimonials Tab Content */}
              <div className={`${activeTab === 'testimonials' ? 'block' : 'hidden'}`}>
                <TestimonialSlider testimonials={testimonials} />
              </div>
              
              {/* FAQ Tab Content */}
              <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h3>
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Plan Your Next Field Trip</h3>
                <p className="text-gray-700 mb-4">
                  Let us help you plan transportation for your next educational excursion. Contact our team for custom quotes and availability.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium flex items-center">
                  Request Information
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
