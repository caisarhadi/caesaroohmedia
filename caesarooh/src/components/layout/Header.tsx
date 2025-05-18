'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../common/ThemeToggle';
import useUIStore from '../../store/uiStore';

const Header = () => {
  const pathname = usePathname();
  const { isHeaderFixed, setHeaderFixed, toggleDrawer, isDrawerOpen } = useUIStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to make header fixed
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50 && !isHeaderFixed) {
        setHeaderFixed(true);
      } else if (scrollY <= 50 && isHeaderFixed) {
        setHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHeaderFixed, setHeaderFixed]);

  // Close mobile menu when user resizes window to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const mainDrawerToggle = () => {
    console.log('🔄 Header: Toggle drawer clicked, current state:', isDrawerOpen);
    toggleDrawer();
    console.log('🔄 Header: After toggleDrawer call, state is now:', useUIStore.getState().isDrawerOpen);
  };

  // Navigation items array to avoid repetition
  const navItems = [
    { href: '/about-us', label: 'About Us' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/inventory', label: 'Inventory' },
    { href: '/mapping', label: 'Mapping' },
    { href: '/insight', label: 'Insight' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <header
      className={`w-full py-4 transition-theme z-10 ${
        isHeaderFixed
          ? 'fixed top-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-md dark:shadow-gray-800'
          : 'relative bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            CAESAR OOH MEDIA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-theme font-semibold
                ${pathname === item.href ? 'text-primary dark:text-primary' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right section with theme toggle and mobile menu button */}
        <div className="flex items-center">
          <ThemeToggle />
          
          {/* Mobile menu button - UPDATED to control the main GSAP drawer */}
          <button
            onClick={mainDrawerToggle}
            className="ml-4 lg:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-expanded={isDrawerOpen}
            aria-controls="drawer-navigation"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`h-6 w-6 ${isDrawerOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isDrawerOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - This is the OLD dropdown menu. May be removed or reworked later. */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute left-0 right-0 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-theme ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                block text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-theme font-semibold
                ${pathname === item.href ? 'text-primary dark:text-primary' : ''}
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;