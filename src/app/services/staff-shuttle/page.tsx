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
import FleetGallery from '@/components/services/FleetGallery';

export default function StaffShuttlePage() {
  const [activeTab, setActiveTab] = useState('features');
  const [animateSection, setAnimateSection] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mounts
    setAnimateSection(true);
  }, []);
  
  // Benefits data
  const benefits = [
    {
      title: "Improved Staff Retention",
      description: "Offering transportation as a benefit helps attract and retain quality educators.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'></path></svg>",
      color: "bg-blue-600"
    },
    {
      title: "Reduced Parking Needs",
      description: "Fewer individual vehicles mean less demand for on-campus parking.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'></path></svg>",
      color: "bg-green-600"
    },
    {
      title: "Environmental Impact",
      description: "Shared transportation reduces carbon footprint and supports sustainability initiatives.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "bg-teal-600"
    },
    {
      title: "Punctuality",
      description: "Reliable transportation helps ensure staff arrive on time and ready to teach.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "bg-indigo-600"
    },
    {
      title: "Cost Efficiency",
      description: "Group transportation can be more economical than individual transportation allowances.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>",
      color: "bg-purple-600"
    }
  ];
  
  // Service options data
  const serviceOptions = [
    {
      title: "Daily Commuter Routes",
      description: "Regular routes from residential hubs to your campus with consistent pickup and drop-off times tailored to school schedules.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'></path></svg>"
    },
    {
      title: "Express Routes",
      description: "Limited-stop service designed for efficiency, reducing commute time for staff members living in more distant areas.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path></svg>"
    },
    {
      title: "Multi-Campus Shuttle",
      description: "Coordinated transportation between multiple school locations, perfect for districts with staff who work across different campuses.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'></path></svg>"
    },
    {
      title: "Evening & Weekend Programs",
      description: "Special routes for after-hours activities, weekend programs, and special events to ensure staff have reliable transportation regardless of schedule.",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'></path></svg>"
    }
  ];
  
  // Comfort features data
  const comfortFeatures = [
    {
      title: "Comfortable Seating",
      description: "Ergonomic seats with ample legroom for a comfortable journey",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'></path></svg>"
    },
    {
      title: "WiFi Connectivity",
      description: "Stay connected and productive during your commute",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'></path></svg>"
    },
    {
      title: "Climate Control",
      description: "Year-round comfort with advanced heating and cooling systems",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'></path></svg>"
    },
    {
      title: "Storage Space",
      description: "Dedicated space for teaching materials and personal items",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'></path></svg>"
    },
    {
      title: "Quiet Environment",
      description: "Peaceful atmosphere for preparation or relaxation",
      icon: "<svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828-3.536-3.536 2.828-2.828a5 5 0 010-7.072m11.314 0l2.828-2.828-3.536-3.536-2.828 2.828a5 5 0 010 7.072M13.828 9.172a4 4 0 00-5.656 0l-4.243 4.243a4 4 0 105.656 5.656l4.243-4.243a4 4 0 000-5.656z'></path></svg>"
    }
  ];
  
  // Fleet images data
  const fleetImages = [
    {
      src: "/images/fleet/staff-shuttle-1.jpg",
      alt: "Modern staff shuttle bus with professional appearance"
    },
    {
      src: "/images/fleet/staff-shuttle-2.jpg",
      alt: "Interior view of staff shuttle with comfortable seating"
    },
    {
      src: "/images/fleet/staff-shuttle-3.jpg",
      alt: "Executive staff shuttle with premium features"
    },
    {
      src: "/images/fleet/staff-shuttle-4.jpg",
      alt: "Staff shuttle with convenient boarding features"
    }
  ];
  
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sharma",
      role: "School Administrator",
      content: "The staff shuttle service has significantly improved our faculty attendance and punctuality. It&apos;s a valuable benefit we offer to our teachers.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Ms. Patel",
      role: "Mathematics Teacher",
      content: "I save so much time and stress by using the staff shuttle. The consistent schedule helps me plan my day efficiently.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Mr. Kumar",
      role: "School Counselor",
      content: "The staff shuttle has created a sense of community among faculty members. We use the commute time to collaborate and share ideas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];
  
  // FAQ data
  const faqs = [
    {
      question: "How are shuttle routes determined?",
      answer: "Routes are designed based on staff residential clusters and optimized for efficiency. We conduct surveys to identify common neighborhoods and create routes that minimize travel time while serving the maximum number of staff members."
    },
    {
      question: "What if my schedule changes occasionally?",
      answer: "We understand that educators sometimes have varying schedules. Our staff shuttle service offers some flexibility with advance notice. For occasional schedule changes, please notify us at least 24 hours in advance."
    },
    {
      question: "Is there a minimum number of staff required for this service?",
      answer: "Yes, we typically require at least 8-10 staff members along a route to make the service viable. However, we're happy to discuss options for smaller groups or combined routes to accommodate your school's needs."
    },
    {
      question: "Can staff members use the shuttle for personal errands after school?",
      answer: "Our standard service provides transportation to and from school. However, we can discuss customized solutions for additional stops or extended service hours based on your staff's needs and budget considerations."
    }
  ];
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Staff Shuttle Services</h1>
            <p className="text-lg text-gray-700 mb-8">
              Dedicated transportation solutions for school staff and faculty members.
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
                  Supporting Educational Staff with Reliable Transportation
                </h2>
                <div className={`mb-8 transition-all duration-700 delay-100 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="text-lg">
                    Teachers and staff are the backbone of any educational institution. Our Staff Shuttle Services provide 
                    comfortable and convenient transportation for faculty members, reducing commuting stress and allowing 
                    them to focus on what they do best—educating students.
                  </p>
                </div>
                
                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-200 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Benefits for Educational Institutions
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

                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-800 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Service Options
                </h3>
                <div className={`mb-12 transition-all duration-700 delay-900 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="mb-4">
                    We offer flexible staff transportation solutions:
                  </p>
                  <div className="space-y-2">
                    {serviceOptions.map((option) => (
                      <ServiceOption 
                        key={option.title}
                        title={option.title}
                        description={option.description}
                        icon={option.icon}
                      />
                    ))}
                  </div>
                </div>

                <h3 className={`text-2xl font-bold mb-6 transition-all duration-700 delay-1000 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  Comfort and Convenience
                </h3>
                <div className={`transition-all duration-700 delay-1100 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                  <p className="mb-4">
                    Our staff shuttles are designed with professional comfort in mind:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {comfortFeatures.map((feature) => (
                      <ComfortFeature 
                        key={feature.title}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Link href="/contact" className="btn-primary">
                  Inquire About Staff Shuttle Options
                </Link>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="md:w-1/3">
              {/* Interactive Tab Navigation */}
              <div className={`flex mb-6 bg-gray-100 rounded-lg p-1 transition-all duration-700 delay-300 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                <button 
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'features' ? 'bg-white shadow-md text-blue-700 transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('features')}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Features
                </button>
                <button 
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'fleet' ? 'bg-white shadow-md text-blue-700 transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('fleet')}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                  Fleet
                </button>
                <button 
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'testimonials' ? 'bg-white shadow-md text-blue-700 transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('testimonials')}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Testimonials
                </button>
                <button 
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-center ${activeTab === 'faq' ? 'bg-white shadow-md text-blue-700 transform scale-105' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('faq')}
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQs
                </button>
              </div>
              
              {/* Features Tab Content */}
              <div className={`transition-all duration-500 ${activeTab === 'features' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 absolute pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 shadow-sm border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Service Highlights
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reliable daily transportation for staff</span>
                    </li>
                    <li className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Customized routes based on staff locations</span>
                    </li>
                    <li className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Flexible scheduling options</span>
                    </li>
                    <li className="flex items-start bg-white bg-opacity-70 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-opacity-100">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comfortable and professional service</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Fleet Tab Content */}
              <div className={`transition-all duration-500 ${activeTab === 'fleet' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 absolute pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    Our Staff Shuttle Fleet
                  </h3>
                  <p className="text-gray-700 mb-4">Our fleet of staff shuttle vehicles is designed for comfort, reliability, and professional appearance. Each vehicle is equipped with modern amenities to ensure a pleasant commute for your staff.</p>
                  <FleetGallery images={fleetImages} />
                </div>
              </div>
              
              {/* Testimonials Tab Content */}
              <div className={`transition-all duration-500 ${activeTab === 'testimonials' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 absolute pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm border border-blue-100">
                  <TestimonialSlider testimonials={testimonials} />
                </div>
              </div>
              
              {/* FAQ Tab Content */}
              <div className={`transition-all duration-500 ${activeTab === 'faq' ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10 absolute pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 shadow-sm border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Frequently Asked Questions
                  </h3>
                  <FaqAccordion faqs={faqs} />
                </div>
              </div>

              <div className={`bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 shadow-lg text-white transition-all duration-700 delay-1200 ${animateSection ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Your Staff Shuttle
                </h3>
                <p className="text-white text-opacity-90 mb-6">
                  Interested in providing transportation benefits for your staff? Contact us to discuss your school's specific needs and receive a customized proposal.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/contact" 
                    className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact Us
                  </Link>
                  <Link 
                    href="/services" 
                    className="bg-blue-800 bg-opacity-50 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center border border-blue-400 border-opacity-30"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
