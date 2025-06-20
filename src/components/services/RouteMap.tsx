'use client';

import { useState } from 'react';

interface RouteStop {
  id: number;
  name: string;
  time: string;
  description: string;
}

interface RouteMapProps {
  stops: RouteStop[];
}

export default function RouteMap({ stops }: RouteMapProps) {
  const [activeStop, setActiveStop] = useState<number | null>(null);

  return (
    <div className="py-6">
      <h3 className="text-xl font-semibold text-blue-900 mb-6">Sample Bus Route</h3>
      
      <div className="relative">
        {/* Vertical line connecting stops */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>
        
        {/* Route stops */}
        <div className="space-y-8">
          {stops.map((stop) => (
            <div 
              key={stop.id} 
              className="relative pl-12"
            >
              {/* Stop circle */}
              <div 
                className={`absolute left-0 w-8 h-8 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  activeStop === stop.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-blue-300 text-blue-600'
                }`}
                onClick={() => setActiveStop(activeStop === stop.id ? null : stop.id)}
              >
                {stop.id}
              </div>
              
              {/* Stop content */}
              <div 
                className={`bg-white rounded-lg border transition-all duration-300 ${
                  activeStop === stop.id 
                    ? 'border-blue-400 shadow-md' 
                    : 'border-gray-200'
                }`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-blue-900">{stop.name}</h4>
                    <span className="text-sm bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {stop.time}
                    </span>
                  </div>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeStop === stop.id ? 'max-h-24 mt-2' : 'max-h-0'
                  }`}>
                    <p className="text-gray-600 text-sm">{stop.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
