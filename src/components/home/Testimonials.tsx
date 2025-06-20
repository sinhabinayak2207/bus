'use client';

import Image from 'next/image';
import { useState } from 'react';

// In a real application, this data would come from the Strapi CMS
const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Principal, Oakridge Academy',
    content: 'SafeBus has transformed our school transportation system. The GPS tracking and real-time alerts give us complete visibility and peace of mind. Our parents appreciate the enhanced safety measures.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Mr. Robert Chen',
    role: 'Transportation Coordinator, Westlake School',
    content: 'The professionalism of SafeBus drivers and support staff is outstanding. Their commitment to safety protocols and punctuality has made them an invaluable partner for our institution.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Mrs. Patricia Williams',
    role: 'Head of Administration, Greenfield Elementary',
    content: 'Since partnering with SafeBus, our transportation-related concerns have decreased by 90%. Their attendance management system and CCTV cameras have greatly improved student behavior and accountability.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Schools Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by educational institutions across the region for safe and reliable transportation services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-2xl p-6 md:p-10 relative">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <svg className="w-12 h-12 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-8">
                <p className="text-gray-700 text-lg italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>
                <div>
                  <h4 className="text-blue-900 font-semibold">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-colors"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
