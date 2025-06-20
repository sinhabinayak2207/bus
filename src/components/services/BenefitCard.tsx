'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  color: string;
}

export default function BenefitCard({ title, description, icon, color }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`rounded-lg p-6 transition-all duration-300 ${
        isHovered ? `${color} shadow-lg transform -translate-y-1` : 'bg-white border border-gray-200'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start">
        <div className={`rounded-full p-3 flex items-center justify-center ${isHovered ? 'bg-white' : color}`}>
          {typeof icon === 'string' ? (
            icon.startsWith('/') || icon.startsWith('http') ? (
              <Image 
                src={icon} 
                alt={title} 
                width={24} 
                height={24} 
                className={`${isHovered ? 'text-blue-600' : 'text-white'}`}
              />
            ) : (
              <div 
                className={`w-6 h-6 ${isHovered ? 'text-blue-600' : 'text-white'}`}
                dangerouslySetInnerHTML={{ __html: icon }} 
              />
            )
          ) : (
            <div className={`w-6 h-6 ${isHovered ? 'text-blue-600' : 'text-white'}`}>
              {icon}
            </div>
          )}
        </div>
        <div className="ml-4">
          <h3 className={`font-semibold text-lg mb-2 ${isHovered ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
          <p className={`${isHovered ? 'text-white' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
