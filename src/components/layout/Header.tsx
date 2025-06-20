'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();
  
  // Navigation links data for DRY implementation
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/fleet', label: 'Fleet' },
    { href: '/compliance-safety', label: 'Safety' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];
  
  // Set active link and close menu on route change
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);
  
  // Handle outside clicks to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const header = document.querySelector('header');
      if (header && !header.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen]);

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMenuOpen(!isMenuOpen);
    
    // Add a subtle vibration feedback on mobile devices when menu is toggled
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-900">Dusker</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`text-gray-700 hover:text-blue-600 transition-colors ${pathname === link.href ? 'text-blue-600 font-medium' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button with enhanced animation */}
          <button 
            className="md:hidden flex items-center justify-center w-16 h-16 rounded-full focus:outline-none bg-blue-100 hover:bg-blue-200 transition-all duration-200 z-50 fixed bottom-4 right-4 shadow-lg"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 bg-blue-900 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                style={{ top: '0' }}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-blue-900 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-blue-900 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
                style={{ bottom: '0' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation with animations */}
        <div 
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={toggleMenu}
        >
          <div 
            className={`fixed right-0 top-0 h-full w-3/4 bg-white shadow-lg z-50 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            onClick={(e) => e.stopPropagation()}
          >
          <nav className="pt-2 pb-5 space-y-1">
            {navLinks.map((link) => (
              <div 
                key={link.href}
                className={`transform transition-all duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${navLinks.findIndex(l => l.href === link.href) * 50}ms` : '0ms' }}
              >
                <Link 
                  href={link.href} 
                  className={`block py-3 px-4 rounded-lg ${pathname === link.href 
                    ? 'bg-blue-50 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'} transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {link.href === pathname && (
                      <span className="mr-2 w-1 h-5 bg-blue-600 rounded-full" />
                    )}
                    {link.label}
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Call to action button in mobile menu */}
            <div 
              className={`transform transition-all duration-300 mt-4 px-4 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? '350ms' : '0ms' }}
            >
              <Link 
                href="/contact" 
                className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

