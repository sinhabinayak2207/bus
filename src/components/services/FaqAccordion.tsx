'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border rounded-lg overflow-hidden transition-all duration-300 ${
            openIndex === index ? 'border-blue-500 shadow-md' : 'border-gray-200'
          }`}
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-blue-50 transition-colors"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium text-blue-900">{faq.question}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96 p-4' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
