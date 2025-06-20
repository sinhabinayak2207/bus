'use client';

import { useState } from 'react';

interface ServiceOptionProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceOption({ title, description, icon }: ServiceOptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button 
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-blue-50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <span className="text-blue-600 mr-3" dangerouslySetInnerHTML={{ __html: icon }} />
          <span className="font-medium">{title}</span>
        </div>
        <svg 
          className={`w-5 h-5 text-blue-600 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-300"
        style={{ 
          maxHeight: isExpanded ? '200px' : '0',
          opacity: isExpanded ? 1 : 0
        }}
      >
        <div className="p-4 bg-blue-50 border-t border-gray-200">
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
}
