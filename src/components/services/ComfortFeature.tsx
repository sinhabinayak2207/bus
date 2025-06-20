'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ComfortFeatureProps {
  title: string;
  description: string;
  icon: string;
}

export default function ComfortFeature({ title, description, icon }: ComfortFeatureProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  // Trigger animation when component comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
      }
    }, { threshold: 0.3 });
    
    const currentElement = document.getElementById(`comfort-feature-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (currentElement) {
      observer.observe(currentElement);
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [title, hasAnimated]);
  
  return (
    <div 
      id={`comfort-feature-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={`flex items-center p-4 rounded-lg border border-gray-200 bg-white transition-all duration-500 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="bg-blue-100 rounded-full p-3 mr-4">
        <span className="text-blue-600 text-xl" dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
