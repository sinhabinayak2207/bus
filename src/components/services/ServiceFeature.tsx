import { useState } from 'react';
import Image from 'next/image';

interface ServiceFeatureProps {
  title: string;
  description: string;
  items: string[];
  icon?: string;
  color?: string;
}

const ServiceFeature = ({ title, description, items, icon, color = 'bg-blue-600' }: ServiceFeatureProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`p-5 cursor-pointer ${isExpanded ? 'border-b border-gray-200' : ''}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {icon && (
              <div className={`rounded-full p-2 ${isHovered ? 'bg-white' : color}`}>
                {typeof icon === 'string' ? (
                  icon.startsWith('/') ? (
                    <Image src={icon} alt={title} width={24} height={24} className={`w-6 h-6 ${isHovered ? color.replace('bg-', 'text-') : 'text-white'}`} />
                  ) : (
                    <div 
                      className={`w-6 h-6 ${isHovered ? color.replace('bg-', 'text-') : 'text-white'}`}
                      dangerouslySetInnerHTML={{ __html: icon }} 
                    />
                  )
                ) : (
                  <div className={`w-6 h-6 ${isHovered ? color.replace('bg-', 'text-') : 'text-white'}`}>
                    {icon}
                  </div>
                )}
              </div>
            )}
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 bg-gray-50">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeature;
