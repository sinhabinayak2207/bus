'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance the slider every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <div className="relative bg-blue-50 rounded-xl p-6 overflow-hidden">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-blue-900">What Parents Say</h3>
      </div>
      
      <div className="relative h-64">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 flex flex-col items-center ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {testimonial.image && (
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
            <div>
              <p className="font-medium text-blue-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white shadow-md hover:bg-blue-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={goToNext}
          className="p-2 rounded-full bg-white shadow-md hover:bg-blue-100 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
