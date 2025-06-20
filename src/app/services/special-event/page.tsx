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

export default function SpecialEventPage() {
  const [activeTab, setActiveTab] = useState('features');
  const [animateSection, setAnimateSection] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateSection(true);
  }, []);
  
  // Fleet images data
  const fleetImages = [
    {
      src: "/images/fleet/special-event-1.jpg",
      alt: "Luxury coach bus for special events"
    },
    {
      src: "/images/fleet/special-event-2.jpg",
      alt: "Interior view of special event bus with premium seating"
    },
    {
      src: "/images/fleet/special-event-3.jpg",
      alt: "Special event bus with decorative lighting"
    },
    {
      src: "/images/fleet/special-event-4.jpg",
      alt: "Special event transportation for school activities"
    }
  ];
  
  // Events We Support data
  const eventsSupported = {
    title: "Events We Support",
    description: "Our Special Event transportation services cover a wide range of school activities:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'></path></svg>",
    color: "bg-indigo-600",
    items: [
      "Sports Competitions: Transportation to away games, tournaments, and athletic meets",
      "Academic Competitions: Reliable transport for debate teams, science olympiads, and scholastic competitions",
      "Performing Arts: Transportation for concerts, plays, and recitals at various venues",
      "School Celebrations: Special event transport for graduations, proms, and school celebrations",
      "Community Service: Transportation for volunteer activities and community engagement projects",
      "Educational Conferences: Transport for student leadership conferences and workshops"
    ]
  };
  
  // Customized Solutions data
  const customizedSolutions = {
    title: "Customized Solutions",
    description: "Every event has unique requirements, and we tailor our services accordingly:",
    icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'></path></svg>",
    color: "bg-purple-600",
    items: [
      "Vehicle size options based on group size",
      "Coordination with event organizers for timing",
      "Contingency planning for weather and schedule changes",
      "On-site coordination with school staff",
      "Evening and weekend service availability",
      "Multiple pickup and drop-off locations",
      "Accommodations for equipment and instruments",
      "Extended wait times for event completion"
    ]
  };
  
  // Benefits data
  const benefits = [
    {
      title: "Customized Solutions",
      description: "Tailored transportation plans for your specific event needs and requirements.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'></path></svg>",
      color: "bg-purple-600"
    },
    {
      title: "Flexible Scheduling",
      description: "Accommodating early morning, late night, and weekend event transportation.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "bg-blue-600"
    },
    {
      title: "Group Coordination",
      description: "Seamless transportation for groups of all sizes, from small teams to entire schools.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path></svg>",
      color: "bg-green-600"
    },
    {
      title: "Premium Comfort",
      description: "Comfortable, clean buses with amenities perfect for special occasions and events.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'></path></svg>",
      color: "bg-red-600"
    }
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Mr. Agarwal",
      role: "Sports Coach",
      content: "Dusker's special event service has been excellent for all our away games. The buses are always on time and the drivers are courteous.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Mrs. Desai",
      role: "Drama Teacher",
      content: "We've used Dusker for our theater performances and competitions. They're flexible with our late-night schedules and always reliable.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Mr. Singh",
      role: "School Event Coordinator",
      content: "For our annual cultural festival, Dusker provided excellent transportation for over 200 students. Their coordination was flawless.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How early should we book transportation for special events?",
      answer: "For regular events, we recommend booking 2-3 weeks in advance. For large events or during peak seasons (like graduation time), booking 1-2 months ahead is advisable."
    },
    {
      question: "Can you accommodate late-night returns from events?",
      answer: "Yes, we offer flexible scheduling including late-night and weekend service for events like proms, sports competitions, and performances that run into the evening."
    },
    {
      question: "Do you provide transportation for large groups?",
      answer: "Absolutely. We can accommodate groups of all sizes, from small teams to entire student bodies. For very large groups, we coordinate multiple buses and ensure synchronized arrivals and departures."
    },
    {
      question: "What if our event runs longer than expected?",
      answer: "Our drivers are prepared for schedule adjustments. We build in buffer time for events that may run longer than planned. For significant delays, we appreciate communication so we can adjust accordingly."
    }
  ];
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Special Event Pickups</h1>
            <p className="text-lg text-gray-700 mb-8">
              Transportation services for school events, competitions, and special occasions.
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
                  Transportation for All School Events
                </h2>
                <div className={`mb-8 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="text-lg">
                    School life extends beyond regular classes, with numerous events, competitions, and special occasions 
                    that require reliable transportation. Our Special Event Pickup service ensures that students arrive 
                    safely and on time to these important activities, allowing them to focus on their performances and participation.
                  </p>
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Key Benefits of Our Special Event Service
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
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Special Event Services</h3>
                  <div className="space-y-3">
                    <ServiceOption
                      title="School Dances & Proms"
                      description="Elegant and reliable transportation for school dances and proms. Our buses provide a safe and stylish way for students to arrive at their special night with options for decorative lighting and premium amenities."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>"
                    />
                    <ServiceOption
                      title="Sports Competitions"
                      description="Specialized transportation for sports teams traveling to away games, tournaments, and competitions. We provide ample storage for equipment and flexible scheduling to accommodate game times and potential overtime."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9'></path></svg>"
                    />
                    <ServiceOption
                      title="Academic Competitions"
                      description="Reliable transportation for debate teams, science olympiads, and other academic competitions. Our quiet, comfortable buses provide the perfect environment for last-minute preparation and post-event discussions."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'></path></svg>"
                    />
                    <ServiceOption
                      title="Graduation Ceremonies"
                      description="Make graduation day special with our premium transportation services. We coordinate pickup and drop-off logistics for large groups and ensure timely arrival for this milestone occasion."
                      icon="<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='M12 14l9-5-9-5-9 5 9 5z'></path><path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'></path></svg>"
                    />
                  </div>
                </div>

                <div className={`space-y-6 transition-all duration-700 delay-900 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <h3 className="text-2xl font-bold mb-6">
                    Special Event Service Details
                  </h3>
                  
                  <ServiceFeature
                    title={eventsSupported.title}
                    description={eventsSupported.description}
                    items={eventsSupported.items}
                    icon={eventsSupported.icon}
                    color={eventsSupported.color}
                  />
                  
                  <div className="h-4"></div>
                  
                  <ServiceFeature
                    title={customizedSolutions.title}
                    description={customizedSolutions.description}
                    items={customizedSolutions.items}
                    icon={customizedSolutions.icon}
                    color={customizedSolutions.color}
                  />
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="btn-primary">
                  Schedule Special Event Transport
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
                      <span>Flexible scheduling for various event timings</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Multiple pickup and drop-off points</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Extended service hours for evening events</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vehicle options for different group sizes</span>
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
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Plan Your Event Transport</h3>
                <p className="text-gray-700 mb-4">
                  Need transportation for an upcoming school event? Contact us to discuss your requirements and receive a customized quote.
                </p>
                <Link href="/contact" className="text-blue-600 font-medium flex items-center">
                  Get a Quote
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
