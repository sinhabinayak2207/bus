'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FaqAccordion from '@/components/services/FaqAccordion';
import TestimonialSlider from '@/components/services/TestimonialSlider';
import RouteMap from '@/components/services/RouteMap';
import BenefitCard from '@/components/services/BenefitCard';
import ServiceOption from '@/components/services/ServiceOption';
import ComfortFeature from '@/components/services/ComfortFeature';
import ServiceFeature from '@/components/services/ServiceFeature';
import FleetGallery from '@/components/services/FleetGallery';

export default function DailySchoolBusPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [animateSection, setAnimateSection] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateSection(true);
  }, []);
  
  // Fleet images data
  const fleetImages = [
    {
      src: "/images/fleet/school-bus-1.jpg",
      alt: "Modern yellow school bus with safety features"
    },
    {
      src: "/images/fleet/school-bus-2.jpg",
      alt: "Interior view of school bus with comfortable seating"
    },
    {
      src: "/images/fleet/school-bus-3.jpg",
      alt: "School bus with students boarding"
    },
    {
      src: "/images/fleet/school-bus-4.jpg",
      alt: "School bus dashboard with modern safety equipment"
    }
  ];
  
  // Benefits data
  const benefits = [
    {
      title: "Safety First",
      description: "Our buses are equipped with advanced safety features and trained drivers.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'></path></svg>",
      color: "bg-red-600"
    },
    {
      title: "Punctuality",
      description: "Reliable schedules ensure students arrive on time for classes every day.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "bg-blue-600"
    },
    {
      title: "GPS Tracking",
      description: "Real-time tracking allows parents to monitor their child's journey.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'></path></svg>",
      color: "bg-green-600"
    },
    {
      title: "Experienced Drivers",
      description: "Our drivers are specially trained to ensure children's safety and comfort.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path></svg>",
      color: "bg-indigo-600"
    },
    {
      title: "Comfort & Convenience",
      description: "Air-conditioned buses with comfortable seating for a pleasant journey.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'></path></svg>",
      color: "bg-purple-600"
    }
  ];
  
  // Safety measures data
  const safetyMeasures = {
    title: "Safety Measures",
    description: "Safety is our top priority. Each bus in our fleet is equipped with:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'></path></svg>",
    color: "bg-red-600",
    items: [
      "CCTV cameras for continuous monitoring",
      "First aid kits and emergency equipment",
      "Regular maintenance and safety inspections",
      "Speed governors and seat belts",
      "Communication systems for immediate contact with our control center"
    ]
  };
  
  // Scheduling data
  const schedulingOptions = {
    title: "Scheduling and Flexibility",
    description: "We offer flexible scheduling options to accommodate various school timings:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>",
    color: "bg-blue-600",
    items: [
      "Regular school day transportation",
      "Early dismissal accommodations",
      "After-school program transportation",
      "Weekend academic program support",
      "Holiday and special schedule adjustments",
      "Emergency weather protocol transportation"
    ]
  };
  
  // Sample route stops data
  const routeStops = [
    {
      id: 1,
      name: "School Compound",
      time: "7:15 AM",
      description: "First pickup location at the community center entrance"
    },
    {
      id: 2,
      name: "Boring rd.",
      time: "7:25 AM",
      description: "Pickup at the main gate of the apartment complex"
    },
    {
      id: 3,
      name: "Patliputra Colony",
      time: "7:35 AM",
      description: "Pickup at the colony clubhouse"
    },
    {
      id: 4,
      name: "School Compound",
      time: "8:00 AM",
      description: "Final destination - main entrance drop-off"
    }
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Parent of 2 children",
      content: "The bus service has been incredibly reliable. The GPS tracking gives me peace of mind knowing exactly when my children will arrive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Parent of a 6th grader",
      content: "The drivers are professional and caring. My son looks forward to his bus ride every day!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Meera Patel",
      role: "School Administrator",
      content: "Dusker's bus service has transformed our school transportation. Their digital attendance system ensures every child is accounted for.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "What safety measures are in place on the buses?",
      answer: "All our buses are equipped with GPS tracking, CCTV cameras, first aid kits, and seat belts. Our drivers undergo rigorous training and background checks, and each bus has a dedicated attendant to ensure student safety."
    },
    {
      question: "How do I track my child's bus location?",
      answer: "Parents can download our mobile app which provides real-time GPS tracking of the bus, estimated arrival times, and notifications when the bus is approaching your stop."
    },
    {
      question: "What happens if my child misses the bus?",
      answer: "We have protocols in place for such situations. Parents can contact our helpline immediately, and we'll coordinate with the school and provide alternative arrangements where possible."
    },
    {
      question: "Can I change my child's pickup or drop-off location?",
      answer: "Yes, with advance notice. Please contact our customer service team at least 48 hours before the change is needed, and we'll do our best to accommodate your request."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Daily School Bus Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              Regular pickup and drop-off services for students with fixed routes and schedules.
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
                  Safe and Reliable Daily Transportation
                </h2>
                <div className={`mb-8 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="text-lg">
                    Our Daily School Bus Service is the cornerstone of our transportation offerings, providing students with 
                    consistent, punctual, and secure transportation to and from school every day. We understand that parents 
                    and schools rely on us to be a dependable part of each student's educational journey.
                  </p>
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Key Benefits of Our Daily Bus Service
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
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Daily Bus Service Options</h3>
                  <div className="space-y-3">
                    <ServiceOption
                      title="Standard Daily Route Service"
                      description="Our core service with fixed pickup and drop-off points along established routes. Includes morning pickup for school and afternoon return service with consistent timing and the same friendly driver each day."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>"
                    />
                    <ServiceOption
                      title="Door-to-Door Service"
                      description="Premium service with pickup directly from your home and drop-off at school. Ideal for younger students or those living outside standard route areas. Includes personalized attention and direct communication with parents."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path></svg>"
                    />
                    <ServiceOption
                      title="Extended Hours Service"
                      description="Transportation for students participating in before or after-school activities. Flexible pickup and drop-off times to accommodate extracurricular schedules and early morning or evening programs."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>"
                    />
                    <ServiceOption
                      title="Special Needs Transportation"
                      description="Specially equipped buses and trained staff to provide accessible transportation for students with special needs. Features include wheelchair accessibility, personalized assistance, and specialized safety protocols."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'></path></svg>"
                    />
                  </div>
                </div>

                <div className={`space-y-6 transition-all duration-700 delay-900 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <h3 className="text-2xl font-bold mb-6">
                    Key Service Features
                  </h3>
                  
                  <ServiceFeature
                    title={safetyMeasures.title}
                    description={safetyMeasures.description}
                    items={safetyMeasures.items}
                    icon={safetyMeasures.icon}
                    color={safetyMeasures.color}
                  />
                  
                  <div className="h-4"></div>
                  
                  <ServiceFeature
                    title={schedulingOptions.title}
                    description={schedulingOptions.description}
                    items={schedulingOptions.items}
                    icon={schedulingOptions.icon}
                    color={schedulingOptions.color}
                  />
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="btn-primary">
                  Request Service Information
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
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${activeTab === 'route' ? 'bg-white shadow-sm text-blue-700' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => setActiveTab('route')}
                >
                  Route Map
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
                      <span>GPS tracking for real-time location updates</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Trained drivers and attendants on every bus</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Digital attendance system for student tracking</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Regular vehicle maintenance and safety checks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible scheduling options</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Testimonials Tab Content */}
              <div className={`${activeTab === 'testimonials' ? 'block' : 'hidden'}`}>
                <TestimonialSlider testimonials={testimonials} />
              </div>

              {/* Route Map Tab Content */}
              <div className={`${activeTab === 'route' ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                  <RouteMap stops={routeStops} />
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Note:</span> This is a sample route. Actual routes are customized based on student locations and school timings.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Tab Content */}
              <div className={`${activeTab === 'faq' ? 'block' : 'hidden'}`}>
                <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Frequently Asked Questions</h3>
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Start Your Service</h3>
                <p className="text-gray-700 mb-4">
                  Ready to provide safe and reliable transportation for your students? Contact us to discuss your school's specific needs.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium flex items-center">
                  Get in Touch
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
