'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 transition-theme">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              CAESAR OOH MEDIA
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Indonesia's leading out-of-home advertising media provider offering innovative OOH inventory solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              {/* For now just using placeholder circles */}
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                aria-label="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6c0-1.1.9-2 2-2h2V0h-3c-2.8 0-5 2.2-5 5v3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                aria-label="Twitter"
              >
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.553v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                  <path d="M5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zM3.767 9h3.582v11.452H3.767V9z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/inventory" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/insight" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Insight
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions#billboards" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Billboards
                </Link>
              </li>
              <li>
                <Link href="/solutions#digital-displays" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Digital Displays
                </Link>
              </li>
              <li>
                <Link href="/solutions#street-furniture" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Street Furniture
                </Link>
              </li>
              <li>
                <Link href="/solutions#transit" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Transit Media
                </Link>
              </li>
              <li>
                <Link href="/solutions#ambient" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-theme">
                  Ambient Media
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <address className="not-italic">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                CAESAR OOH MEDIA Headquarters
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Jl. Example Street No. 123
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Jakarta, Indonesia 12345
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Phone: +62 123 4567 890
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Email: info@caesaroohmedia.com
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright & Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} CAESAR OOH MEDIA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary transition-theme">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary transition-theme">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary dark:hover:text-primary transition-theme">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 